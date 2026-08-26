INSERT INTO users (id,email,password_hash,display_name,role,school,avatar_url,status,points)
VALUES
('11111111-1111-4111-8111-111111111111','demo.student@zhixing.study','scrypt$1FGWCssuaPbc_cvVQg7q9g$3vMMorqcIz02y5AUpPQiee1WGPwZ-d9bYlUr-mqDaGSp9ptZX9ASVpmk0TBtX3wXt0tNqrMPjNMfMFiGMacepg','研学学生-赵同学','student','北京市第一中学','https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=240&q=80','active',860),
('22222222-2222-4222-8222-222222222222','demo.parent@zhixing.study','scrypt$1FGWCssuaPbc_cvVQg7q9g$3vMMorqcIz02y5AUpPQiee1WGPwZ-d9bYlUr-mqDaGSp9ptZX9ASVpmk0TBtX3wXt0tNqrMPjNMfMFiGMacepg','研学家长-赵妈妈','parent','北京市第一中学','https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=240&q=80','active',120),
('33333333-3333-4333-8333-333333333333','demo.teacher@zhixing.study','scrypt$1FGWCssuaPbc_cvVQg7q9g$3vMMorqcIz02y5AUpPQiee1WGPwZ-d9bYlUr-mqDaGSp9ptZX9ASVpmk0TBtX3wXt0tNqrMPjNMfMFiGMacepg','研学老师-李老师','teacher','知行研学中心','https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=240&q=80','active',0)
ON CONFLICT (email) DO UPDATE SET
password_hash=EXCLUDED.password_hash,
display_name=EXCLUDED.display_name,
role=EXCLUDED.role,
school=EXCLUDED.school,
avatar_url=EXCLUDED.avatar_url,
status='active',
points=EXCLUDED.points,
updated_at=now();

UPDATE courses
SET teacher_id='33333333-3333-4333-8333-333333333333', updated_at=now()
WHERE slug IN ('history-culture','natural-science','frontier-technology');

INSERT INTO parent_students (parent_id,student_id,relation,approved_at)
VALUES ('22222222-2222-4222-8222-222222222222','11111111-1111-4111-8111-111111111111','母亲',now())
ON CONFLICT (parent_id,student_id) DO UPDATE SET relation=EXCLUDED.relation, approved_at=now();

INSERT INTO enrollments (user_id,course_id,enrolled_at)
SELECT '11111111-1111-4111-8111-111111111111', id, now()-interval '18 days'
FROM courses WHERE slug IN ('history-culture','natural-science')
ON CONFLICT (user_id,course_id) DO NOTHING;

INSERT INTO learning_progress (user_id,content_id,status,progress,duration_seconds,state,updated_at)
SELECT '11111111-1111-4111-8111-111111111111', cc.id,
CASE
  WHEN cc.course_id=(SELECT id FROM courses WHERE slug='history-culture') THEN 'completed'
  WHEN cc.content_type='video' THEN 'completed'
  WHEN cc.content_type='homework' THEN 'submitted'
  ELSE 'started'
END,
CASE
  WHEN cc.course_id=(SELECT id FROM courses WHERE slug='history-culture') THEN 100
  WHEN cc.content_type IN ('video','homework') THEN 100
  ELSE 45
END,
CASE WHEN cc.content_type='video' THEN 1680 ELSE 420 END,
jsonb_build_object('demo',true,'source','showcase seed'),
now()-interval '2 days'
FROM course_contents cc
JOIN courses c ON c.id=cc.course_id
WHERE c.slug IN ('history-culture','natural-science') AND cc.published=true
ON CONFLICT (user_id,content_id) DO UPDATE SET
status=EXCLUDED.status,
progress=EXCLUDED.progress,
duration_seconds=EXCLUDED.duration_seconds,
state=EXCLUDED.state,
updated_at=EXCLUDED.updated_at;

INSERT INTO submissions (id,content_id,student_id,text_content,status,score,teacher_feedback,graded_by,graded_at,submitted_at)
SELECT '44444444-4444-4444-8444-444444444444', cc.id, '11111111-1111-4111-8111-111111111111',
'我们整理了东归路线中的关键节点，重点说明承德阶段的历史背景、民族交流证据和现场研学观察。附件包含路线图照片与小组讲解视频。',
'graded',92,'材料完整，路线证据清楚。建议在结论中再补充一条个人观察。','33333333-3333-4333-8333-333333333333',now()-interval '1 day',now()-interval '3 days'
FROM course_contents cc JOIN courses c ON c.id=cc.course_id
WHERE c.slug='history-culture' AND cc.content_type='homework'
ORDER BY cc.sort_order LIMIT 1
ON CONFLICT (id) DO UPDATE SET
text_content=EXCLUDED.text_content,
status=EXCLUDED.status,
score=EXCLUDED.score,
teacher_feedback=EXCLUDED.teacher_feedback,
graded_by=EXCLUDED.graded_by,
graded_at=EXCLUDED.graded_at;

INSERT INTO submissions (id,content_id,student_id,text_content,status,submitted_at)
SELECT '55555555-5555-4555-8555-555555555555', cc.id, '11111111-1111-4111-8111-111111111111',
'今日完成植物样方记录，已上传样方照片、物种数量表和一段现场观察视频，等待老师批改。',
'submitted',now()-interval '8 hours'
FROM course_contents cc JOIN courses c ON c.id=cc.course_id
WHERE c.slug='natural-science' AND cc.content_type='homework'
ORDER BY cc.sort_order LIMIT 1
ON CONFLICT (id) DO UPDATE SET
text_content=EXCLUDED.text_content,
status=EXCLUDED.status,
score=NULL,
teacher_feedback='',
submitted_at=EXCLUDED.submitted_at;

INSERT INTO certificates (id,user_id,course_id,certificate_no,issued_at,verified)
SELECT '66666666-6666-4666-8666-666666666666','11111111-1111-4111-8111-111111111111',id,'ZX-DEMO-2026-001',now()-interval '1 day',true
FROM courses WHERE slug='history-culture'
ON CONFLICT (user_id,course_id) DO UPDATE SET verified=true, issued_at=EXCLUDED.issued_at;

INSERT INTO conversations (id,title,conversation_type,created_by,created_at)
VALUES ('77777777-7777-4777-8777-777777777777','承德历史文化研学小组','course','33333333-3333-4333-8333-333333333333',now()-interval '5 days')
ON CONFLICT (id) DO UPDATE SET title=EXCLUDED.title;

INSERT INTO conversation_members (conversation_id,user_id,last_read_at)
VALUES
('77777777-7777-4777-8777-777777777777','11111111-1111-4111-8111-111111111111',now()-interval '1 day'),
('77777777-7777-4777-8777-777777777777','22222222-2222-4222-8222-222222222222',now()-interval '2 days'),
('77777777-7777-4777-8777-777777777777','33333333-3333-4333-8333-333333333333',now()-interval '1 day')
ON CONFLICT (conversation_id,user_id) DO UPDATE SET last_read_at=EXCLUDED.last_read_at;

INSERT INTO messages (id,conversation_id,sender_id,content,message_type,created_at)
VALUES
('88888888-8888-4888-8888-888888888881','77777777-7777-4777-8777-777777777777','33333333-3333-4333-8333-333333333333','同学们今晚前补充东归路线证据卡，明天现场分享。','text',now()-interval '2 days'),
('88888888-8888-4888-8888-888888888882','77777777-7777-4777-8777-777777777777','11111111-1111-4111-8111-111111111111','老师，我已经上传路线图和讲解视频，请您查看。','text',now()-interval '1 day'),
('88888888-8888-4888-8888-888888888883','77777777-7777-4777-8777-777777777777','22222222-2222-4222-8222-222222222222','家长端已经能看到作业和学习进度了，谢谢老师。','text',now()-interval '18 hours')
ON CONFLICT (id) DO NOTHING;

INSERT INTO notifications (id,user_id,title,message,notification_type,read_at,created_at)
VALUES
('99999999-9999-4999-8999-999999999991','11111111-1111-4111-8111-111111111111','作业批改完成','李老师已批改你的东归路线作业，得分 92。','grading',NULL,now()-interval '1 day'),
('99999999-9999-4999-8999-999999999992','11111111-1111-4111-8111-111111111111','学习证书已签发','历史文化主题学习证书已进入个人中心。','certificate',now()-interval '20 hours',now()-interval '1 day'),
('99999999-9999-4999-8999-999999999993','22222222-2222-4222-8222-222222222222','学生学习更新','赵同学提交了自然科学样方观察作业。','parent',NULL,now()-interval '8 hours'),
('99999999-9999-4999-8999-999999999994','33333333-3333-4333-8333-333333333333','有新的待批改作业','赵同学提交了自然科学样方观察作业。','submission',NULL,now()-interval '8 hours')
ON CONFLICT (id) DO UPDATE SET title=EXCLUDED.title,message=EXCLUDED.message,read_at=EXCLUDED.read_at,created_at=EXCLUDED.created_at;
