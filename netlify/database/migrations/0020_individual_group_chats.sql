-- Create one persistent WeChat-style direct conversation for every pair in
-- each showcase group. The operation is idempotent across future deploys.
WITH demo_groups(group_no,student_id,parent_id,teacher_id) AS (VALUES
(1,'18000001-0000-4000-8000-000000000001'::uuid,'28000001-0000-4000-8000-000000000001'::uuid,'38000001-0000-4000-8000-000000000001'::uuid),
(2,'18000002-0000-4000-8000-000000000002'::uuid,'28000002-0000-4000-8000-000000000002'::uuid,'38000002-0000-4000-8000-000000000002'::uuid),
(3,'18000003-0000-4000-8000-000000000003'::uuid,'28000003-0000-4000-8000-000000000003'::uuid,'38000003-0000-4000-8000-000000000003'::uuid),
(4,'18000004-0000-4000-8000-000000000004'::uuid,'28000004-0000-4000-8000-000000000004'::uuid,'38000004-0000-4000-8000-000000000004'::uuid),
(5,'18000005-0000-4000-8000-000000000005'::uuid,'28000005-0000-4000-8000-000000000005'::uuid,'38000005-0000-4000-8000-000000000005'::uuid),
(6,'18000006-0000-4000-8000-000000000006'::uuid,'28000006-0000-4000-8000-000000000006'::uuid,'38000006-0000-4000-8000-000000000006'::uuid),
(7,'18000007-0000-4000-8000-000000000007'::uuid,'28000007-0000-4000-8000-000000000007'::uuid,'38000007-0000-4000-8000-000000000007'::uuid),
(8,'18000008-0000-4000-8000-000000000008'::uuid,'28000008-0000-4000-8000-000000000008'::uuid,'38000008-0000-4000-8000-000000000008'::uuid),
(9,'18000009-0000-4000-8000-000000000009'::uuid,'28000009-0000-4000-8000-000000000009'::uuid,'38000009-0000-4000-8000-000000000009'::uuid),
(10,'18000010-0000-4000-8000-000000000010'::uuid,'28000010-0000-4000-8000-000000000010'::uuid,'38000010-0000-4000-8000-000000000010'::uuid)
), pairs AS (
  SELECT group_no,1 AS pair_type,student_id AS user_a,parent_id AS user_b FROM demo_groups
  UNION ALL SELECT group_no,2,student_id,teacher_id FROM demo_groups
  UNION ALL SELECT group_no,3,parent_id,teacher_id FROM demo_groups
), chats AS (
  SELECT group_no,pair_type,user_a,user_b,
    format('182%s0000-0000-4000-8000-0000000000%s',pair_type,lpad(group_no::text,2,'0'))::uuid AS conversation_id
  FROM pairs
), saved_conversations AS (
  INSERT INTO conversations(id,title,conversation_type,created_by,created_at)
  SELECT c.conversation_id,ua.display_name || ' 与 ' || ub.display_name,'direct',c.user_a,now()-interval '2 days'
  FROM chats c JOIN users ua ON ua.id=c.user_a JOIN users ub ON ub.id=c.user_b
  ON CONFLICT (id) DO UPDATE SET conversation_type='direct',title=EXCLUDED.title
  RETURNING id
), saved_members AS (
  INSERT INTO conversation_members(conversation_id,user_id,last_read_at)
  SELECT c.conversation_id,m.user_id,now()-interval '3 days'
  FROM chats c CROSS JOIN LATERAL (VALUES(c.user_a),(c.user_b)) AS m(user_id)
  ON CONFLICT (conversation_id,user_id) DO NOTHING
  RETURNING conversation_id,user_id
)
INSERT INTO messages(id,conversation_id,sender_id,content,message_type,created_at)
SELECT format('18240000-0000-4000-8000-00000000%s%s',lpad(pair_type::text,2,'0'),lpad(group_no::text,2,'0'))::uuid,
  conversation_id,user_b,
  CASE pair_type
    WHEN 1 THEN '今天的研学安排记得按时完成，有需要随时告诉我。'
    WHEN 2 THEN '课程任务和作业反馈都在这里沟通，有问题可以直接留言。'
    ELSE '您好，孩子的课程进度和研学安排可以在这里随时沟通。'
  END,
  'text',now()-interval '1 day'
FROM chats
ON CONFLICT (id) DO NOTHING;
