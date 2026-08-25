INSERT INTO users (id,email,password_hash,display_name,role,school,avatar_url,status,points,email_verified_at)
VALUES
('11111111-1111-4111-8111-111111111111','demo.student@zhixing.study','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','张思远','student','北京市知行实验中学','./assets/images/local/img-01-a183044718.jpg','active',960,now()),
('22222222-2222-4222-8222-222222222222','demo.parent@zhixing.study','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','张女士','parent','北京市知行实验中学','./assets/images/local/img-12-42a5b04af9.jpg','active',160,now()),
('33333333-3333-4333-8333-333333333333','demo.teacher@zhixing.study','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','李老师','teacher','知行研学中心','./assets/images/local/img-13-c1fd0a6461.jpg','active',0,now()),
('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa','demo.admin@zhixing.study','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','平台管理员','admin','知行研学平台','./assets/images/local/img-11-8fe1e93a3f.jpg','active',0,now()),
('13131313-1313-4313-8313-131313131313','zhang.siyuan2026@outlook.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','张思远','student','北京市知行实验中学','./assets/images/local/img-01-a183044718.jpg','active',960,now()),
('23232323-2323-4323-8323-232323232323','zhang.parent2026@163.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','张女士','parent','北京市知行实验中学','./assets/images/local/img-12-42a5b04af9.jpg','active',160,now()),
('34343434-3434-4343-8343-343434343434','li.teacher2026@qq.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','李老师','teacher','知行研学中心','./assets/images/local/img-13-c1fd0a6461.jpg','active',0,now())
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
SET teacher_id='33333333-3333-4333-8333-333333333333', updated_at=now()
WHERE slug IN ('history-culture','natural-science','frontier-technology','arts-humanities','red-education','social-practice');

INSERT INTO parent_students (parent_id,student_id,relation,approved_at)
VALUES
('22222222-2222-4222-8222-222222222222','11111111-1111-4111-8111-111111111111','母亲',now()),
('23232323-2323-4323-8323-232323232323','13131313-1313-4313-8313-131313131313','母亲',now())
ON CONFLICT (parent_id,student_id) DO UPDATE SET relation=EXCLUDED.relation, approved_at=now();

INSERT INTO enrollments (user_id,course_id,enrolled_at)
SELECT student_id, c.id,
CASE WHEN c.slug='history-culture' THEN now()-interval '24 days' ELSE now()-interval '8 days' END
FROM courses c
CROSS JOIN (VALUES ('11111111-1111-4111-8111-111111111111'::uuid),('13131313-1313-4313-8313-131313131313'::uuid)) AS s(student_id)
WHERE c.slug IN ('history-culture','natural-science','frontier-technology')
ON CONFLICT (user_id,course_id) DO NOTHING;

INSERT INTO course_contents (course_id,content_type,title,body,sort_order,published)
SELECT c.id,v.content_type,v.title,jsonb_build_object('description',v.description,'demo',true),v.sort_order,true
FROM courses c JOIN (VALUES
('history-culture','task','历史知识测验','完成土尔扈特部东归历史知识测验。',122),
('history-culture','task','绘制东归路线图','根据所学资料绘制东归路线图。',123),
('history-culture','task','小组分享演讲','准备并完成小组成果分享。',124),
('history-culture','homework','东归路线证据包提交','提交路线图、现场照片、讲解稿和证据说明。',125),
('natural-science','homework','生态样方观察报告','提交样方照片、物种记录和现场观察说明。',126),
('frontier-technology','material','航天研学资料包','课程资料、任务说明和拓展阅读。',127)
) AS v(slug,content_type,title,description,sort_order) ON c.slug=v.slug
WHERE NOT EXISTS (SELECT 1 FROM course_contents cc WHERE cc.course_id=c.id AND cc.title=v.title);

INSERT INTO learning_progress (user_id,content_id,status,progress,duration_seconds,state,updated_at)
SELECT s.student_id, cc.id,
CASE
  WHEN cc.title='历史知识测验' THEN 'started'
  WHEN cc.title IN ('绘制东归路线图','小组分享演讲') THEN 'started'
  WHEN cc.title='东归路线证据包提交' THEN 'submitted'
  WHEN cc.title='生态样方观察报告' THEN 'submitted'
  ELSE 'started'
END,
CASE
  WHEN cc.title='历史知识测验' THEN 60
  WHEN cc.title IN ('绘制东归路线图','小组分享演讲') THEN 0
  WHEN cc.title='东归路线证据包提交' THEN 100
  WHEN cc.title='生态样方观察报告' THEN 40
  ELSE 25
END,
CASE WHEN cc.content_type='video' THEN 1500 ELSE 900 END,
jsonb_build_object('demo',true,'studentName','张思远'),
now()-interval '6 hours'
FROM course_contents cc
JOIN courses c ON c.id=cc.course_id
CROSS JOIN (VALUES ('11111111-1111-4111-8111-111111111111'::uuid),('13131313-1313-4313-8313-131313131313'::uuid)) AS s(student_id)
WHERE c.slug IN ('history-culture','natural-science','frontier-technology') AND cc.published=true
ON CONFLICT (user_id,content_id) DO UPDATE SET
status=EXCLUDED.status,
progress=EXCLUDED.progress,
duration_seconds=EXCLUDED.duration_seconds,
state=EXCLUDED.state,
updated_at=EXCLUDED.updated_at;

INSERT INTO course_orders (id,user_id,course_id,amount_cents,currency,payment_method,status,contact_info,created_at,paid_at)
SELECT
CASE c.slug
  WHEN 'history-culture' THEN '17171717-aaaa-4717-8717-171717171701'::uuid
  WHEN 'natural-science' THEN '17171717-aaaa-4717-8717-171717171702'::uuid
  ELSE '17171717-aaaa-4717-8717-171717171703'::uuid
END,
'11111111-1111-4111-8111-111111111111', c.id, COALESCE(c.price_cents,0), 'CNY', 'school_transfer', 'paid',
jsonb_build_object('studentName','张思远','parentName','张女士','parentPhone','18800000000','school','北京市知行实验中学'),
now()-interval '20 days', now()-interval '19 days'
FROM courses c
WHERE c.slug IN ('history-culture','natural-science','frontier-technology')
ON CONFLICT (id) DO UPDATE SET
amount_cents=EXCLUDED.amount_cents,
status='paid',
contact_info=EXCLUDED.contact_info,
paid_at=EXCLUDED.paid_at;

INSERT INTO submissions (id,content_id,student_id,text_content,status,score,teacher_feedback,graded_by,graded_at,submitted_at)
SELECT '17171717-bbbb-4717-8717-171717171701', cc.id, '11111111-1111-4111-8111-111111111111',
'我们小组完成了东归路线图绘制，标注了伏尔加河、巴尔喀什湖、伊犁、承德等关键节点，并补充了路线选择和民族交流证据。',
'graded',94,'路线节点清晰，证据链完整。展示时可以再增加一段个人观察，让成果更有温度。','33333333-3333-4333-8333-333333333333',now()-interval '2 days',now()-interval '4 days'
FROM course_contents cc JOIN courses c ON c.id=cc.course_id
WHERE c.slug='history-culture' AND cc.title='东归路线证据包提交'
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
SELECT '17171717-bbbb-4717-8717-171717171702', cc.id, '11111111-1111-4111-8111-111111111111',
'已完成草原样方记录，上传了样方照片、物种统计表和现场观察视频，等待老师批改。',
'submitted',now()-interval '10 hours'
FROM course_contents cc JOIN courses c ON c.id=cc.course_id
WHERE c.slug='natural-science' AND cc.title='生态样方观察报告'
ON CONFLICT (id) DO UPDATE SET
content_id=EXCLUDED.content_id,
text_content=EXCLUDED.text_content,
status='submitted',
score=NULL,
teacher_feedback='',
graded_by=NULL,
graded_at=NULL,
submitted_at=EXCLUDED.submitted_at;

INSERT INTO certificates (id,user_id,course_id,certificate_no,issued_at,verified)
SELECT '17171717-cccc-4717-8717-171717171701','11111111-1111-4111-8111-111111111111',id,'ZX-DEMO-2026-001',now()-interval '2 days',true
FROM courses WHERE slug='history-culture'
ON CONFLICT (user_id,course_id) DO UPDATE SET verified=true, issued_at=EXCLUDED.issued_at;

INSERT INTO friendships (requester_id,addressee_id,status,accepted_at)
VALUES
('11111111-1111-4111-8111-111111111111','33333333-3333-4333-8333-333333333333','accepted',now()-interval '12 days'),
('11111111-1111-4111-8111-111111111111','22222222-2222-4222-8222-222222222222','accepted',now()-interval '12 days'),
('22222222-2222-4222-8222-222222222222','33333333-3333-4333-8333-333333333333','accepted',now()-interval '10 days')
ON CONFLICT DO NOTHING;

INSERT INTO conversations (id,title,conversation_type,created_by,created_at)
VALUES
('17171717-dddd-4717-8717-171717171701','张思远 · 李老师','direct','33333333-3333-4333-8333-333333333333',now()-interval '6 days'),
('17171717-dddd-4717-8717-171717171702','张思远 · 张女士','direct','22222222-2222-4222-8222-222222222222',now()-interval '5 days'),
('17171717-dddd-4717-8717-171717171703','东归历史文化研学小组','course','33333333-3333-4333-8333-333333333333',now()-interval '4 days')
ON CONFLICT (id) DO UPDATE SET title=EXCLUDED.title, conversation_type=EXCLUDED.conversation_type;

INSERT INTO conversation_members (conversation_id,user_id,last_read_at)
VALUES
('17171717-dddd-4717-8717-171717171701','11111111-1111-4111-8111-111111111111',now()-interval '3 hours'),
('17171717-dddd-4717-8717-171717171701','33333333-3333-4333-8333-333333333333',now()-interval '2 hours'),
('17171717-dddd-4717-8717-171717171702','11111111-1111-4111-8111-111111111111',now()-interval '1 day'),
('17171717-dddd-4717-8717-171717171702','22222222-2222-4222-8222-222222222222',now()-interval '1 day'),
('17171717-dddd-4717-8717-171717171703','11111111-1111-4111-8111-111111111111',now()-interval '2 hours'),
('17171717-dddd-4717-8717-171717171703','22222222-2222-4222-8222-222222222222',now()-interval '2 hours'),
('17171717-dddd-4717-8717-171717171703','33333333-3333-4333-8333-333333333333',now()-interval '2 hours')
ON CONFLICT (conversation_id,user_id) DO UPDATE SET last_read_at=EXCLUDED.last_read_at;

INSERT INTO messages (id,conversation_id,sender_id,content,message_type,created_at)
VALUES
('17171717-eeee-4717-8717-171717171701','17171717-dddd-4717-8717-171717171701','33333333-3333-4333-8333-333333333333','思远，东归路线图已经批改完成，整体很好，记得补充个人观察。','text',now()-interval '2 days'),
('17171717-eeee-4717-8717-171717171702','17171717-dddd-4717-8717-171717171701','11111111-1111-4111-8111-111111111111','收到老师，我会把承德现场观察补进结论里。','text',now()-interval '1 day'),
('17171717-eeee-4717-8717-171717171703','17171717-dddd-4717-8717-171717171702','22222222-2222-4222-8222-222222222222','我在家长端看到你的学习进度了，草原样方作业也提交了吗？','text',now()-interval '20 hours'),
('17171717-eeee-4717-8717-171717171704','17171717-dddd-4717-8717-171717171702','11111111-1111-4111-8111-111111111111','已经提交了，等李老师批改。','text',now()-interval '18 hours'),
('17171717-eeee-4717-8717-171717171705','17171717-dddd-4717-8717-171717171703','33333333-3333-4333-8333-333333333333','明天小组展示，请每位同学准备 2 分钟成果说明。','text',now()-interval '6 hours'),
('17171717-eeee-4717-8717-171717171706','17171717-dddd-4717-8717-171717171703','11111111-1111-4111-8111-111111111111','我们组会展示路线图、证据卡和分工记录。','text',now()-interval '5 hours')
ON CONFLICT (id) DO UPDATE SET content=EXCLUDED.content,created_at=EXCLUDED.created_at;

INSERT INTO notifications (id,user_id,title,message,notification_type,read_at,created_at)
VALUES
('17171717-ffff-4717-8717-171717171701','11111111-1111-4111-8111-111111111111','作业批改完成','李老师已批改你的东归路线图作业，得分 94。','grading',NULL,now()-interval '2 days'),
('17171717-ffff-4717-8717-171717171702','11111111-1111-4111-8111-111111111111','学习证书已签发','历史文化主题研学证书已进入个人中心。','certificate',now()-interval '1 day',now()-interval '2 days'),
('17171717-ffff-4717-8717-171717171703','22222222-2222-4222-8222-222222222222','孩子学习动态','张思远提交了草原样方观察作业，家长端可查看学习记录。','parent',NULL,now()-interval '10 hours'),
('17171717-ffff-4717-8717-171717171704','33333333-3333-4333-8333-333333333333','新的待批作业','张思远提交了草原样方观察作业，请及时批改。','submission',NULL,now()-interval '10 hours')
ON CONFLICT (id) DO UPDATE SET title=EXCLUDED.title,message=EXCLUDED.message,read_at=EXCLUDED.read_at,created_at=EXCLUDED.created_at;

INSERT INTO community_posts (id,author_id,category,content,location,status,created_at,updated_at)
VALUES
('17171717-9999-4717-8717-171717171701','11111111-1111-4111-8111-111111111111','研学成果','小组合作完成了东归路线图绘制，大家一起查资料、画路线、整理证据，终于把成果展示出来了。','研学教室','published',now()-interval '1 day',now()-interval '1 day'),
('17171717-9999-4717-8717-171717171702','33333333-3333-4333-8333-333333333333','教师公告','明天进行东归历史文化主题展示，请各小组带好路线图、证据卡和讲解稿。','知行研学中心','published',now()-interval '6 hours',now()-interval '6 hours')
ON CONFLICT (id) DO UPDATE SET content=EXCLUDED.content,location=EXCLUDED.location,status=EXCLUDED.status,updated_at=now();
