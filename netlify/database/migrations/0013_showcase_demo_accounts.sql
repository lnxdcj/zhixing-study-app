INSERT INTO users (id,email,password_hash,display_name,role,school,avatar_url,status,points,email_verified_at)
VALUES
('13131313-1313-4313-8313-131313131313','zhang.siyuan2026@outlook.com','scrypt$1FGWCssuaPbc_cvVQg7q9g$3vMMorqcIz02y5AUpPQiee1WGPwZ-d9bYlUr-mqDaGSp9ptZX9ASVpmk0TBtX3wXt0tNqrMPjNMfMFiGMacepg','陈思远','student','北京市知行实验中学','https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/A_view_of_a_classroom_in_Tieling_High_School_01.jpg/320px-A_view_of_a_classroom_in_Tieling_High_School_01.jpg','active',960,now()),
('23232323-2323-4323-8323-232323232323','zhang.parent2026@163.com','scrypt$1FGWCssuaPbc_cvVQg7q9g$3vMMorqcIz02y5AUpPQiee1WGPwZ-d9bYlUr-mqDaGSp9ptZX9ASVpmk0TBtX3wXt0tNqrMPjNMfMFiGMacepg','陈妈妈','parent','北京市知行实验中学','https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=320&q=80','active',160,now()),
('34343434-3434-4343-8343-343434343434','li.teacher2026@qq.com','scrypt$1FGWCssuaPbc_cvVQg7q9g$3vMMorqcIz02y5AUpPQiee1WGPwZ-d9bYlUr-mqDaGSp9ptZX9ASVpmk0TBtX3wXt0tNqrMPjNMfMFiGMacepg','李老师','teacher','知行研学中心','https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=320&q=80','active',0,now())
ON CONFLICT (email) DO UPDATE SET
password_hash=EXCLUDED.password_hash,
display_name=EXCLUDED.display_name,
role=EXCLUDED.role,
school=EXCLUDED.school,
avatar_url=EXCLUDED.avatar_url,
status='active',
points=EXCLUDED.points,
email_verified_at=COALESCE(users.email_verified_at, now()),
updated_at=now();

UPDATE courses
SET teacher_id='34343434-3434-4343-8343-343434343434', updated_at=now()
WHERE slug IN ('history-culture','natural-science','frontier-technology');

INSERT INTO parent_students (parent_id,student_id,relation,approved_at)
VALUES ('23232323-2323-4323-8323-232323232323','13131313-1313-4313-8313-131313131313','母亲',now())
ON CONFLICT (parent_id,student_id) DO UPDATE SET relation=EXCLUDED.relation, approved_at=now();

INSERT INTO enrollments (user_id,course_id,enrolled_at)
SELECT '13131313-1313-4313-8313-131313131313', id,
CASE WHEN slug='history-culture' THEN now()-interval '24 days' ELSE now()-interval '7 days' END
FROM courses
WHERE slug IN ('history-culture','natural-science','frontier-technology')
ON CONFLICT (user_id,course_id) DO NOTHING;

INSERT INTO course_orders (id,user_id,course_id,amount_cents,currency,payment_method,status,contact_info,created_at,paid_at)
SELECT
CASE c.slug
  WHEN 'history-culture' THEN '13131313-aaaa-4313-8313-131313131301'::uuid
  WHEN 'natural-science' THEN '13131313-aaaa-4313-8313-131313131302'::uuid
  ELSE '13131313-aaaa-4313-8313-131313131303'::uuid
END,
'13131313-1313-4313-8313-131313131313', c.id, COALESCE(c.price_cents,0), 'CNY', 'school_transfer', 'paid',
jsonb_build_object('studentName','陈思远','parentPhone','18800000000','school','北京市知行实验中学'),
now()-interval '20 days', now()-interval '19 days'
FROM courses c
WHERE c.slug IN ('history-culture','natural-science','frontier-technology')
ON CONFLICT (id) DO UPDATE SET
amount_cents=EXCLUDED.amount_cents,
status='paid',
contact_info=EXCLUDED.contact_info,
paid_at=EXCLUDED.paid_at;

INSERT INTO learning_progress (user_id,content_id,status,progress,duration_seconds,state,updated_at)
SELECT '13131313-1313-4313-8313-131313131313', cc.id,
CASE
  WHEN c.slug='history-culture' THEN 'completed'
  WHEN c.slug='natural-science' AND cc.content_type IN ('video','homework','task') THEN 'submitted'
  WHEN c.slug='frontier-technology' AND cc.content_type='video' THEN 'started'
  ELSE 'started'
END,
CASE
  WHEN c.slug='history-culture' THEN 100
  WHEN c.slug='natural-science' AND cc.content_type IN ('video','homework','task') THEN 80
  WHEN c.slug='frontier-technology' AND cc.content_type='video' THEN 25
  ELSE 0
END,
CASE WHEN cc.content_type='video' THEN 1500 WHEN cc.content_type='homework' THEN 900 ELSE 480 END,
jsonb_build_object('showcase',true,'student','陈思远'),
now()-interval '6 hours'
FROM course_contents cc
JOIN courses c ON c.id=cc.course_id
WHERE c.slug IN ('history-culture','natural-science','frontier-technology') AND cc.published=true
ON CONFLICT (user_id,content_id) DO UPDATE SET
status=EXCLUDED.status,
progress=EXCLUDED.progress,
duration_seconds=EXCLUDED.duration_seconds,
state=EXCLUDED.state,
updated_at=EXCLUDED.updated_at;

INSERT INTO submissions (id,content_id,student_id,text_content,status,score,teacher_feedback,graded_by,graded_at,submitted_at)
SELECT '13131313-bbbb-4313-8313-131313131301', cc.id, '13131313-1313-4313-8313-131313131313',
'我们小组完成了东归路线图绘制，标注了伏尔加河、巴尔喀什湖、伊犁、承德等关键节点，并补充了路线选择和民族交流证据。',
'graded',94,'路线节点清楚，证据链完整。展示时可以再增加一段个人观察，让成果更有温度。','34343434-3434-4343-8343-343434343434',now()-interval '2 days',now()-interval '4 days'
FROM course_contents cc JOIN courses c ON c.id=cc.course_id
WHERE c.slug='history-culture' AND cc.content_type='homework'
ORDER BY cc.sort_order LIMIT 1
ON CONFLICT (id) DO UPDATE SET
content_id=EXCLUDED.content_id,
text_content=EXCLUDED.text_content,
status=EXCLUDED.status,
score=EXCLUDED.score,
teacher_feedback=EXCLUDED.teacher_feedback,
graded_by=EXCLUDED.graded_by,
graded_at=EXCLUDED.graded_at,
submitted_at=EXCLUDED.submitted_at;

INSERT INTO submissions (id,content_id,student_id,text_content,status,submitted_at)
SELECT '13131313-bbbb-4313-8313-131313131302', cc.id, '13131313-1313-4313-8313-131313131313',
'已完成草原植物样方记录，上传了样方照片、物种统计表和现场观察视频，等待老师批改。',
'submitted',now()-interval '10 hours'
FROM course_contents cc JOIN courses c ON c.id=cc.course_id
WHERE c.slug='natural-science' AND cc.content_type='homework'
ORDER BY cc.sort_order LIMIT 1
ON CONFLICT (id) DO UPDATE SET
content_id=EXCLUDED.content_id,
text_content=EXCLUDED.text_content,
status='submitted',
score=NULL,
teacher_feedback='',
graded_by=NULL,
graded_at=NULL,
submitted_at=EXCLUDED.submitted_at;

INSERT INTO submission_files (submission_id,blob_key,file_name,mime_type,size_bytes,file_data)
VALUES
('13131313-bbbb-4313-8313-131313131301','showcase/donggui-route-map','东归路线图.png','image/png',68,decode('89504e470d0a1a0a0000000d49484452000000010000000108060000001f15c4890000000b49444154789c6360f8ffff3f0005fe02fea7cd2d9b0000000049454e44ae426082','hex')),
('13131313-bbbb-4313-8313-131313131301','showcase/donggui-presentation','小组讲解提纲.txt','text/plain',112,convert_to('东归路线说明：路线节点、承德安置、民族交流证据、现场研学观察和小组分工。','UTF8')),
('13131313-bbbb-4313-8313-131313131302','showcase/ecology-sample','草原样方观察表.txt','text/plain',108,convert_to('样方记录：植物覆盖度约75%，发现禾本科植物、昆虫活动痕迹，并记录天气与土壤湿度。','UTF8'))
ON CONFLICT (blob_key) DO UPDATE SET
file_name=EXCLUDED.file_name,
mime_type=EXCLUDED.mime_type,
size_bytes=EXCLUDED.size_bytes,
file_data=EXCLUDED.file_data;

INSERT INTO certificates (id,user_id,course_id,certificate_no,issued_at,verified)
SELECT '13131313-cccc-4313-8313-131313131301','13131313-1313-4313-8313-131313131313',id,'ZX-SHOW-2026-001',now()-interval '2 days',true
FROM courses WHERE slug='history-culture'
ON CONFLICT (user_id,course_id) DO UPDATE SET verified=true, issued_at=EXCLUDED.issued_at;

WITH friend_pairs(requester_id,addressee_id,accepted_at) AS (
  VALUES
  ('13131313-1313-4313-8313-131313131313'::uuid,'34343434-3434-4343-8343-343434343434'::uuid,now()-interval '12 days'),
  ('13131313-1313-4313-8313-131313131313'::uuid,'23232323-2323-4323-8323-232323232323'::uuid,now()-interval '12 days'),
  ('23232323-2323-4323-8323-232323232323'::uuid,'34343434-3434-4343-8343-343434343434'::uuid,now()-interval '10 days')
),
updated AS (
  UPDATE friendships f
  SET status='accepted', accepted_at=fp.accepted_at
  FROM friend_pairs fp
  WHERE (f.requester_id=fp.requester_id AND f.addressee_id=fp.addressee_id)
     OR (f.requester_id=fp.addressee_id AND f.addressee_id=fp.requester_id)
  RETURNING f.id
)
INSERT INTO friendships (requester_id,addressee_id,status,accepted_at)
SELECT fp.requester_id,fp.addressee_id,'accepted',fp.accepted_at
FROM friend_pairs fp
WHERE NOT EXISTS (
  SELECT 1 FROM friendships f
  WHERE (f.requester_id=fp.requester_id AND f.addressee_id=fp.addressee_id)
     OR (f.requester_id=fp.addressee_id AND f.addressee_id=fp.requester_id)
);

INSERT INTO conversations (id,title,conversation_type,created_by,created_at)
VALUES
('13131313-dddd-4313-8313-131313131301','陈思远 · 李老师','direct','34343434-3434-4343-8343-343434343434',now()-interval '6 days'),
('13131313-dddd-4313-8313-131313131302','陈思远 · 陈妈妈','direct','23232323-2323-4323-8323-232323232323',now()-interval '5 days'),
('13131313-dddd-4313-8313-131313131303','东归历史文化研学小组','course','34343434-3434-4343-8343-343434343434',now()-interval '4 days')
ON CONFLICT (id) DO UPDATE SET title=EXCLUDED.title, conversation_type=EXCLUDED.conversation_type;

INSERT INTO conversation_members (conversation_id,user_id,last_read_at)
VALUES
('13131313-dddd-4313-8313-131313131301','13131313-1313-4313-8313-131313131313',now()-interval '3 hours'),
('13131313-dddd-4313-8313-131313131301','34343434-3434-4343-8343-343434343434',now()-interval '2 hours'),
('13131313-dddd-4313-8313-131313131302','13131313-1313-4313-8313-131313131313',now()-interval '1 day'),
('13131313-dddd-4313-8313-131313131302','23232323-2323-4323-8323-232323232323',now()-interval '1 day'),
('13131313-dddd-4313-8313-131313131303','13131313-1313-4313-8313-131313131313',now()-interval '2 hours'),
('13131313-dddd-4313-8313-131313131303','23232323-2323-4323-8323-232323232323',now()-interval '2 hours'),
('13131313-dddd-4313-8313-131313131303','34343434-3434-4343-8343-343434343434',now()-interval '2 hours')
ON CONFLICT (conversation_id,user_id) DO UPDATE SET last_read_at=EXCLUDED.last_read_at;

INSERT INTO messages (id,conversation_id,sender_id,content,message_type,created_at)
VALUES
('13131313-eeee-4313-8313-131313131301','13131313-dddd-4313-8313-131313131301','34343434-3434-4343-8343-343434343434','思远，东归路线图已经批改完成，整体很好，记得补充个人观察。','text',now()-interval '2 days'),
('13131313-eeee-4313-8313-131313131302','13131313-dddd-4313-8313-131313131301','13131313-1313-4313-8313-131313131313','收到老师，我会把承德现场观察补进结论里。','text',now()-interval '1 day'),
('13131313-eeee-4313-8313-131313131303','13131313-dddd-4313-8313-131313131302','23232323-2323-4323-8323-232323232323','我在家长端看到你的学习进度了，草原样方作业也提交了吗？','text',now()-interval '20 hours'),
('13131313-eeee-4313-8313-131313131304','13131313-dddd-4313-8313-131313131302','13131313-1313-4313-8313-131313131313','已经提交了，等李老师批改。','text',now()-interval '18 hours'),
('13131313-eeee-4313-8313-131313131305','13131313-dddd-4313-8313-131313131303','34343434-3434-4343-8343-343434343434','明天小组展示，请每位同学准备 2 分钟成果说明。','text',now()-interval '6 hours'),
('13131313-eeee-4313-8313-131313131306','13131313-dddd-4313-8313-131313131303','13131313-1313-4313-8313-131313131313','我们组会展示路线图、证据卡和分工记录。','text',now()-interval '5 hours')
ON CONFLICT (id) DO UPDATE SET content=EXCLUDED.content,created_at=EXCLUDED.created_at;

INSERT INTO notifications (id,user_id,title,message,notification_type,read_at,created_at)
VALUES
('13131313-ffff-4313-8313-131313131301','13131313-1313-4313-8313-131313131313','作业批改完成','李老师已批改你的东归路线图作业，得分 94。','grading',NULL,now()-interval '2 days'),
('13131313-ffff-4313-8313-131313131302','13131313-1313-4313-8313-131313131313','学习证书已签发','历史文化主题研学证书已进入个人中心。','certificate',now()-interval '1 day',now()-interval '2 days'),
('13131313-ffff-4313-8313-131313131303','23232323-2323-4323-8323-232323232323','孩子学习动态','陈思远提交了草原样方观察作业，家长端可查看学习记录。','parent',NULL,now()-interval '10 hours'),
('13131313-ffff-4313-8313-131313131304','34343434-3434-4343-8343-343434343434','新的待批作业','陈思远提交了草原样方观察作业，请及时批改。','submission',NULL,now()-interval '10 hours')
ON CONFLICT (id) DO UPDATE SET title=EXCLUDED.title,message=EXCLUDED.message,read_at=EXCLUDED.read_at,created_at=EXCLUDED.created_at;
