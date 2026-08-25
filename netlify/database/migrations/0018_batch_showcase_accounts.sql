-- Ten independent showcase groups. Password for every account: Zhixing2026!
-- This migration is idempotent and intentionally keeps the demo accounts isolated
-- from the original demo.student / demo.parent / demo.teacher records.
INSERT INTO users (id,email,password_hash,display_name,role,school,avatar_url,status,points,email_verified_at)
VALUES
('18000001-0000-4000-8000-000000000001','lin.yuchen01@outlook.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','林宇辰','student','北京市海淀实验学校','./assets/images/local/img-01-a183044718.jpg','active',720,now()),
('28000001-0000-4000-8000-000000000001','qian.jing01@163.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','钱静','parent','北京市海淀实验学校','./assets/images/local/img-12-42a5b04af9.jpg','active',210,now()),
('38000001-0000-4000-8000-000000000001','zhang.wenbo01@qq.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','张文博','teacher','知行研学中心 · 海淀校区','./assets/images/local/img-13-c1fd0a6461.jpg','active',0,now()),
('18000002-0000-4000-8000-000000000002','chen.xinyi02@outlook.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','陈欣怡','student','上海市浦东明珠学校','./assets/images/local/img-02-d71b8c647c.jpg','active',640,now()),
('28000002-0000-4000-8000-000000000002','wang.lili02@163.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','王丽丽','parent','上海市浦东明珠学校','./assets/images/local/img-14-c2a34c3d80.jpg','active',180,now()),
('38000002-0000-4000-8000-000000000002','zhou.hao02@qq.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','周浩','teacher','知行研学中心 · 浦东校区','./assets/images/local/img-15-6914c5c358.jpg','active',0,now()),
('18000003-0000-4000-8000-000000000003','zhao.zimo03@outlook.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','赵子墨','student','广州市越秀外国语学校','./assets/images/local/img-03-7ad34f8845.jpg','active',860,now()),
('28000003-0000-4000-8000-000000000003','liu.nan03@163.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','刘楠','parent','广州市越秀外国语学校','./assets/images/local/img-16-5decddeb47.jpg','active',320,now()),
('38000003-0000-4000-8000-000000000003','gao.yiming03@qq.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','高一鸣','teacher','知行研学中心 · 越秀校区','./assets/images/local/img-17-fdff9c975f.jpg','active',0,now()),
('18000004-0000-4000-8000-000000000004','huang.yuxuan04@outlook.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','黄雨萱','student','成都市锦江实验中学','./assets/images/local/img-04-dd40eac031.jpg','active',530,now()),
('28000004-0000-4000-8000-000000000004','sun.qing04@163.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','孙晴','parent','成都市锦江实验中学','./assets/images/local/img-18-0aeaf0b31c.jpg','active',140,now()),
('38000004-0000-4000-8000-000000000004','luo.jing04@qq.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','罗静','teacher','知行研学中心 · 锦江校区','./assets/images/local/img-19-724e6a867c.jpg','active',0,now()),
('18000005-0000-4000-8000-000000000005','wu.haoran05@outlook.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','吴浩然','student','武汉市武昌实验学校','./assets/images/local/img-05-e790ab6274.png','active',410,now()),
('28000005-0000-4000-8000-000000000005','he.yan05@163.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','何燕','parent','武汉市武昌实验学校','./assets/images/local/img-20-cdbe1d416d.jpg','active',260,now()),
('38000005-0000-4000-8000-000000000005','fang.jie05@qq.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','方杰','teacher','知行研学中心 · 武昌校区','./assets/images/local/img-21-b5bc3010f8.jpg','active',0,now()),
('18000006-0000-4000-8000-000000000006','xu.jiale06@outlook.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','徐嘉乐','student','西安市雁塔创新学校','./assets/images/local/img-06-6a7b5e875e.jpg','active',770,now()),
('28000006-0000-4000-8000-000000000006','ma.ying06@163.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','马莹','parent','西安市雁塔创新学校','./assets/images/local/img-22-c8d9ffb7b4.jpg','active',290,now()),
('38000006-0000-4000-8000-000000000006','tang.wei06@qq.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','唐伟','teacher','知行研学中心 · 雁塔校区','./assets/images/local/img-23-535d9f29e4.jpg','active',0,now()),
('18000007-0000-4000-8000-000000000007','yang.xin07@outlook.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','杨欣','student','南京市鼓楼研学学校','./assets/images/local/img-07-9fbbe20e09.jpg','active',690,now()),
('28000007-0000-4000-8000-000000000007','zheng.lei07@163.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','郑蕾','parent','南京市鼓楼研学学校','./assets/images/local/img-24-7c64fc7a7c.jpg','active',230,now()),
('38000007-0000-4000-8000-000000000007','deng.chao07@qq.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','邓超','teacher','知行研学中心 · 鼓楼校区','./assets/images/local/img-25-ac539e5cb1.jpg','active',0,now()),
('18000008-0000-4000-8000-000000000008','li.meng08@outlook.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','李梦','student','杭州市西湖少年宫学校','./assets/images/local/img-08-e1a961b81c.jpg','active',580,now()),
('28000008-0000-4000-8000-000000000008','cui.jing08@163.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','崔静','parent','杭州市西湖少年宫学校','./assets/images/local/img-32-fed8726dc7.jpg','active',170,now()),
('38000008-0000-4000-8000-000000000008','shen.jun08@qq.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','沈军','teacher','知行研学中心 · 西湖校区','./assets/images/local/img-27-9d408bdecc.jpg','active',0,now()),
('18000009-0000-4000-8000-000000000009','gao.yue09@outlook.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','高悦','student','重庆市渝中实践学校','./assets/images/local/img-09-721dfa4afb.jpg','active',930,now()),
('28000009-0000-4000-8000-000000000009','lu.yan09@163.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','陆燕','parent','重庆市渝中实践学校','./assets/images/local/img-28-8de0559127.jpg','active',350,now()),
('38000009-0000-4000-8000-000000000009','qin.hao09@qq.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','秦浩','teacher','知行研学中心 · 渝中校区','./assets/images/local/img-29-8c578283a2.jpg','active',0,now()),
('18000010-0000-4000-8000-000000000010','luo.tian10@outlook.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','罗恬','student','青岛市市南海洋学校','./assets/images/local/img-10-ea1b29c392.jpg','active',460,now()),
('28000010-0000-4000-8000-000000000010','xie.fang10@163.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','谢芳','parent','青岛市市南海洋学校','./assets/images/local/img-30-0137aef3d7.jpg','active',200,now()),
('38000010-0000-4000-8000-000000000010','yu.feifei10@qq.com','scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg','于菲菲','teacher','知行研学中心 · 市南校区','./assets/images/local/img-31-08c9125a57.jpg','active',0,now())
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

INSERT INTO parent_students (parent_id,student_id,relation,approved_at)
VALUES
('28000001-0000-4000-8000-000000000001','18000001-0000-4000-8000-000000000001','母亲',now()),
('28000002-0000-4000-8000-000000000002','18000002-0000-4000-8000-000000000002','母亲',now()),
('28000003-0000-4000-8000-000000000003','18000003-0000-4000-8000-000000000003','母亲',now()),
('28000004-0000-4000-8000-000000000004','18000004-0000-4000-8000-000000000004','母亲',now()),
('28000005-0000-4000-8000-000000000005','18000005-0000-4000-8000-000000000005','母亲',now()),
('28000006-0000-4000-8000-000000000006','18000006-0000-4000-8000-000000000006','母亲',now()),
('28000007-0000-4000-8000-000000000007','18000007-0000-4000-8000-000000000007','母亲',now()),
('28000008-0000-4000-8000-000000000008','18000008-0000-4000-8000-000000000008','母亲',now()),
('28000009-0000-4000-8000-000000000009','18000009-0000-4000-8000-000000000009','母亲',now()),
('28000010-0000-4000-8000-000000000010','18000010-0000-4000-8000-000000000010','母亲',now())
ON CONFLICT (parent_id,student_id) DO UPDATE
SET relation=EXCLUDED.relation, approved_at=now();

WITH demo_groups(group_no,student_id,parent_id,teacher_id,course_slug,progress,theme,student_note,parent_note,teacher_note) AS (VALUES
(1,'18000001-0000-4000-8000-000000000001'::uuid,'28000001-0000-4000-8000-000000000001'::uuid,'38000001-0000-4000-8000-000000000001'::uuid,'history-culture',72,'东归历史路线','我已经完成承德普陀宗乘之庙的资料卡，准备继续补充路线证据。','家长端可看到林宇辰历史文化课程进度和老师反馈。','请林宇辰把路线图中的关键地点再标注清楚。'),
(2,'18000002-0000-4000-8000-000000000002'::uuid,'28000002-0000-4000-8000-000000000002'::uuid,'38000002-0000-4000-8000-000000000002'::uuid,'natural-science',64,'草原样方观察','我上传了植物样方照片，正在整理物种数量表。','家长端可看到陈欣怡自然科学课程进度和作业提交情况。','样方记录很完整，下一步补充观察时间和天气。'),
(3,'18000003-0000-4000-8000-000000000003'::uuid,'28000003-0000-4000-8000-000000000003'::uuid,'38000003-0000-4000-8000-000000000003'::uuid,'arts-humanities',58,'丝路艺术观察','我完成了壁画色彩观察，准备做一页小组展示。','家长端可看到赵子墨艺术人文研学资料阅读情况。','展示时注意说明色彩背后的文化含义。'),
(4,'18000004-0000-4000-8000-000000000004'::uuid,'28000004-0000-4000-8000-000000000004'::uuid,'38000004-0000-4000-8000-000000000004'::uuid,'arts-humanities',46,'园林空间记录','我记录了框景和借景案例，还需要补照片说明。','家长端可看到黄雨萱园林观察任务完成度。','请把现场照片和文字说明对应起来。'),
(5,'18000005-0000-4000-8000-000000000005'::uuid,'28000005-0000-4000-8000-000000000005'::uuid,'38000005-0000-4000-8000-000000000005'::uuid,'social-practice',39,'社区公共空间调研','我完成了访谈提纲，明天准备去社区做记录。','家长端可看到吴浩然社会实践安排和安全提醒。','访谈前先确认对象同意，并记录时间地点。'),
(6,'18000006-0000-4000-8000-000000000006'::uuid,'28000006-0000-4000-8000-000000000006'::uuid,'38000006-0000-4000-8000-000000000006'::uuid,'red-education',81,'红色史料研读','我读完家书材料，正在整理朗读稿。','家长端可看到徐嘉乐红色教育课程成果。','朗读稿情感很好，补充一段时代背景会更完整。'),
(7,'18000007-0000-4000-8000-000000000007'::uuid,'28000007-0000-4000-8000-000000000007'::uuid,'38000007-0000-4000-8000-000000000007'::uuid,'history-culture',52,'研学路线规划','我和小组完成了路线草图，还需要分配讲解任务。','家长端可看到杨欣小组协作进展。','路线规划可以加入交通时间和安全集合点。'),
(8,'18000008-0000-4000-8000-000000000008'::uuid,'28000008-0000-4000-8000-000000000008'::uuid,'38000008-0000-4000-8000-000000000008'::uuid,'natural-science',67,'湿地生态记录','我完成了水鸟观察记录，准备整理成图表。','家长端可看到李梦自然观察成果和资料阅读。','图表可以按时间段整理，会更清楚。'),
(9,'18000009-0000-4000-8000-000000000009'::uuid,'28000009-0000-4000-8000-000000000009'::uuid,'38000009-0000-4000-8000-000000000009'::uuid,'social-practice',44,'城市更新访谈','我完成了第一位居民访谈，正在整理观点。','家长端可看到高悦实践任务提醒。','访谈记录要区分事实描述和个人看法。'),
(10,'18000010-0000-4000-8000-000000000010'::uuid,'28000010-0000-4000-8000-000000000010'::uuid,'38000010-0000-4000-8000-000000000010'::uuid,'frontier-technology',75,'海洋科技研学','我看完了海洋传感器资料，想做一个监测方案。','家长端可看到罗恬海洋科技课程进度。','方案里补充数据采集频率和展示方式。')
)
INSERT INTO enrollments (user_id,course_id,enrolled_at)
SELECT g.student_id,c.id,now()-((g.group_no + 4) || ' days')::interval
FROM demo_groups g JOIN courses c ON c.slug=g.course_slug
ON CONFLICT (user_id,course_id) DO NOTHING;

WITH demo_groups(group_no,student_id,course_slug,progress) AS (VALUES
(1,'18000001-0000-4000-8000-000000000001'::uuid,'history-culture',72),(2,'18000002-0000-4000-8000-000000000002'::uuid,'natural-science',64),
(3,'18000003-0000-4000-8000-000000000003'::uuid,'arts-humanities',58),(4,'18000004-0000-4000-8000-000000000004'::uuid,'arts-humanities',46),
(5,'18000005-0000-4000-8000-000000000005'::uuid,'social-practice',39),(6,'18000006-0000-4000-8000-000000000006'::uuid,'red-education',81),
(7,'18000007-0000-4000-8000-000000000007'::uuid,'history-culture',52),(8,'18000008-0000-4000-8000-000000000008'::uuid,'natural-science',67),
(9,'18000009-0000-4000-8000-000000000009'::uuid,'social-practice',44),(10,'18000010-0000-4000-8000-000000000010'::uuid,'frontier-technology',75)
)
INSERT INTO learning_progress (user_id,content_id,status,progress,duration_seconds,state,updated_at)
SELECT g.student_id,cc.id,
CASE WHEN cc.content_type IN ('task','homework') AND g.progress >= 70 THEN 'submitted' WHEN g.progress >= 80 THEN 'completed' ELSE 'started' END,
CASE WHEN row_number() OVER (PARTITION BY g.student_id ORDER BY cc.sort_order) = 1 THEN g.progress ELSE GREATEST(0,g.progress - 18) END,
600 + g.group_no * 90,
jsonb_build_object('showcase',true,'groupNo',g.group_no),
now()-(g.group_no || ' hours')::interval
FROM demo_groups g
JOIN courses c ON c.slug=g.course_slug
JOIN course_contents cc ON cc.course_id=c.id
WHERE cc.sort_order IN (10,20,30)
ON CONFLICT (user_id,content_id) DO UPDATE SET
status=EXCLUDED.status,
progress=EXCLUDED.progress,
duration_seconds=EXCLUDED.duration_seconds,
state=EXCLUDED.state,
updated_at=EXCLUDED.updated_at;

WITH demo_groups(group_no,student_id,parent_id,teacher_id,theme,student_note,parent_note,teacher_note) AS (VALUES
(1,'18000001-0000-4000-8000-000000000001'::uuid,'28000001-0000-4000-8000-000000000001'::uuid,'38000001-0000-4000-8000-000000000001'::uuid,'东归历史路线','我已经完成承德普陀宗乘之庙的资料卡，准备继续补充路线证据。','家长端可看到林宇辰历史文化课程进度和老师反馈。','请林宇辰把路线图中的关键地点再标注清楚。'),
(2,'18000002-0000-4000-8000-000000000002'::uuid,'28000002-0000-4000-8000-000000000002'::uuid,'38000002-0000-4000-8000-000000000002'::uuid,'草原样方观察','我上传了植物样方照片，正在整理物种数量表。','家长端可看到陈欣怡自然科学课程进度和作业提交情况。','样方记录很完整，下一步补充观察时间和天气。'),
(3,'18000003-0000-4000-8000-000000000003'::uuid,'28000003-0000-4000-8000-000000000003'::uuid,'38000003-0000-4000-8000-000000000003'::uuid,'丝路艺术观察','我完成了壁画色彩观察，准备做一页小组展示。','家长端可看到赵子墨艺术人文研学资料阅读情况。','展示时注意说明色彩背后的文化含义。'),
(4,'18000004-0000-4000-8000-000000000004'::uuid,'28000004-0000-4000-8000-000000000004'::uuid,'38000004-0000-4000-8000-000000000004'::uuid,'园林空间记录','我记录了框景和借景案例，还需要补照片说明。','家长端可看到黄雨萱园林观察任务完成度。','请把现场照片和文字说明对应起来。'),
(5,'18000005-0000-4000-8000-000000000005'::uuid,'28000005-0000-4000-8000-000000000005'::uuid,'38000005-0000-4000-8000-000000000005'::uuid,'社区公共空间调研','我完成了访谈提纲，明天准备去社区做记录。','家长端可看到吴浩然社会实践安排和安全提醒。','访谈前先确认对象同意，并记录时间地点。'),
(6,'18000006-0000-4000-8000-000000000006'::uuid,'28000006-0000-4000-8000-000000000006'::uuid,'38000006-0000-4000-8000-000000000006'::uuid,'红色史料研读','我读完家书材料，正在整理朗读稿。','家长端可看到徐嘉乐红色教育课程成果。','朗读稿情感很好，补充一段时代背景会更完整。'),
(7,'18000007-0000-4000-8000-000000000007'::uuid,'28000007-0000-4000-8000-000000000007'::uuid,'38000007-0000-4000-8000-000000000007'::uuid,'研学路线规划','我和小组完成了路线草图，还需要分配讲解任务。','家长端可看到杨欣小组协作进展。','路线规划可以加入交通时间和安全集合点。'),
(8,'18000008-0000-4000-8000-000000000008'::uuid,'28000008-0000-4000-8000-000000000008'::uuid,'38000008-0000-4000-8000-000000000008'::uuid,'湿地生态记录','我完成了水鸟观察记录，准备整理成图表。','家长端可看到李梦自然观察成果和资料阅读。','图表可以按时间段整理，会更清楚。'),
(9,'18000009-0000-4000-8000-000000000009'::uuid,'28000009-0000-4000-8000-000000000009'::uuid,'38000009-0000-4000-8000-000000000009'::uuid,'城市更新访谈','我完成了第一位居民访谈，正在整理观点。','家长端可看到高悦实践任务提醒。','访谈记录要区分事实描述和个人看法。'),
(10,'18000010-0000-4000-8000-000000000010'::uuid,'28000010-0000-4000-8000-000000000010'::uuid,'38000010-0000-4000-8000-000000000010'::uuid,'海洋科技研学','我看完了海洋传感器资料，想做一个监测方案。','家长端可看到罗恬海洋科技课程进度。','方案里补充数据采集频率和展示方式。')
)
INSERT INTO conversations (id,title,conversation_type,created_by,created_at)
SELECT ('18180000-0000-4000-8000-0000000000' || lpad(group_no::text,2,'0'))::uuid, theme || ' · 家校沟通','direct',teacher_id,now()-(group_no || ' days')::interval
FROM demo_groups
ON CONFLICT (id) DO UPDATE SET title=EXCLUDED.title, conversation_type=EXCLUDED.conversation_type;

WITH demo_groups(group_no,student_id,parent_id,teacher_id) AS (VALUES
(1,'18000001-0000-4000-8000-000000000001'::uuid,'28000001-0000-4000-8000-000000000001'::uuid,'38000001-0000-4000-8000-000000000001'::uuid),(2,'18000002-0000-4000-8000-000000000002'::uuid,'28000002-0000-4000-8000-000000000002'::uuid,'38000002-0000-4000-8000-000000000002'::uuid),(3,'18000003-0000-4000-8000-000000000003'::uuid,'28000003-0000-4000-8000-000000000003'::uuid,'38000003-0000-4000-8000-000000000003'::uuid),(4,'18000004-0000-4000-8000-000000000004'::uuid,'28000004-0000-4000-8000-000000000004'::uuid,'38000004-0000-4000-8000-000000000004'::uuid),(5,'18000005-0000-4000-8000-000000000005'::uuid,'28000005-0000-4000-8000-000000000005'::uuid,'38000005-0000-4000-8000-000000000005'::uuid),(6,'18000006-0000-4000-8000-000000000006'::uuid,'28000006-0000-4000-8000-000000000006'::uuid,'38000006-0000-4000-8000-000000000006'::uuid),(7,'18000007-0000-4000-8000-000000000007'::uuid,'28000007-0000-4000-8000-000000000007'::uuid,'38000007-0000-4000-8000-000000000007'::uuid),(8,'18000008-0000-4000-8000-000000000008'::uuid,'28000008-0000-4000-8000-000000000008'::uuid,'38000008-0000-4000-8000-000000000008'::uuid),(9,'18000009-0000-4000-8000-000000000009'::uuid,'28000009-0000-4000-8000-000000000009'::uuid,'38000009-0000-4000-8000-000000000009'::uuid),(10,'18000010-0000-4000-8000-000000000010'::uuid,'28000010-0000-4000-8000-000000000010'::uuid,'38000010-0000-4000-8000-000000000010'::uuid)
), members AS (
SELECT group_no,student_id AS user_id FROM demo_groups UNION ALL SELECT group_no,parent_id FROM demo_groups UNION ALL SELECT group_no,teacher_id FROM demo_groups
)
INSERT INTO conversation_members (conversation_id,user_id,last_read_at)
SELECT ('18180000-0000-4000-8000-0000000000' || lpad(group_no::text,2,'0'))::uuid,user_id,now()-interval '3 hours'
FROM members
ON CONFLICT (conversation_id,user_id) DO UPDATE SET last_read_at=EXCLUDED.last_read_at;

WITH demo_groups(group_no,student_id,parent_id,teacher_id,student_note,parent_note,teacher_note) AS (VALUES
(1,'18000001-0000-4000-8000-000000000001'::uuid,'28000001-0000-4000-8000-000000000001'::uuid,'38000001-0000-4000-8000-000000000001'::uuid,'我已经完成承德普陀宗乘之庙的资料卡，准备继续补充路线证据。','家长端可看到林宇辰历史文化课程进度和老师反馈。','请林宇辰把路线图中的关键地点再标注清楚。'),
(2,'18000002-0000-4000-8000-000000000002'::uuid,'28000002-0000-4000-8000-000000000002'::uuid,'38000002-0000-4000-8000-000000000002'::uuid,'我上传了植物样方照片，正在整理物种数量表。','家长端可看到陈欣怡自然科学课程进度和作业提交情况。','样方记录很完整，下一步补充观察时间和天气。'),
(3,'18000003-0000-4000-8000-000000000003'::uuid,'28000003-0000-4000-8000-000000000003'::uuid,'38000003-0000-4000-8000-000000000003'::uuid,'我完成了壁画色彩观察，准备做一页小组展示。','家长端可看到赵子墨艺术人文研学资料阅读情况。','展示时注意说明色彩背后的文化含义。'),
(4,'18000004-0000-4000-8000-000000000004'::uuid,'28000004-0000-4000-8000-000000000004'::uuid,'38000004-0000-4000-8000-000000000004'::uuid,'我记录了框景和借景案例，还需要补照片说明。','家长端可看到黄雨萱园林观察任务完成度。','请把现场照片和文字说明对应起来。'),
(5,'18000005-0000-4000-8000-000000000005'::uuid,'28000005-0000-4000-8000-000000000005'::uuid,'38000005-0000-4000-8000-000000000005'::uuid,'我完成了访谈提纲，明天准备去社区做记录。','家长端可看到吴浩然社会实践安排和安全提醒。','访谈前先确认对象同意，并记录时间地点。'),
(6,'18000006-0000-4000-8000-000000000006'::uuid,'28000006-0000-4000-8000-000000000006'::uuid,'38000006-0000-4000-8000-000000000006'::uuid,'我读完家书材料，正在整理朗读稿。','家长端可看到徐嘉乐红色教育课程成果。','朗读稿情感很好，补充一段时代背景会更完整。'),
(7,'18000007-0000-4000-8000-000000000007'::uuid,'28000007-0000-4000-8000-000000000007'::uuid,'38000007-0000-4000-8000-000000000007'::uuid,'我和小组完成了路线草图，还需要分配讲解任务。','家长端可看到杨欣小组协作进展。','路线规划可以加入交通时间和安全集合点。'),
(8,'18000008-0000-4000-8000-000000000008'::uuid,'28000008-0000-4000-8000-000000000008'::uuid,'38000008-0000-4000-8000-000000000008'::uuid,'我完成了水鸟观察记录，准备整理成图表。','家长端可看到李梦自然观察成果和资料阅读。','图表可以按时间段整理，会更清楚。'),
(9,'18000009-0000-4000-8000-000000000009'::uuid,'28000009-0000-4000-8000-000000000009'::uuid,'38000009-0000-4000-8000-000000000009'::uuid,'我完成了第一位居民访谈，正在整理观点。','家长端可看到高悦实践任务提醒。','访谈记录要区分事实描述和个人看法。'),
(10,'18000010-0000-4000-8000-000000000010'::uuid,'28000010-0000-4000-8000-000000000010'::uuid,'38000010-0000-4000-8000-000000000010'::uuid,'我看完了海洋传感器资料，想做一个监测方案。','家长端可看到罗恬海洋科技课程进度。','方案里补充数据采集频率和展示方式。')
), msg(seed_no,group_no,sender_id,content) AS (
SELECT 1,group_no,student_id,student_note FROM demo_groups UNION ALL SELECT 2,group_no,parent_id,parent_note FROM demo_groups UNION ALL SELECT 3,group_no,teacher_id,teacher_note FROM demo_groups
)
INSERT INTO messages (id,conversation_id,sender_id,content,message_type,created_at)
SELECT ('18190000-0000-4000-8000-00000000' || lpad(group_no::text,2,'0') || lpad(seed_no::text,2,'0'))::uuid,
('18180000-0000-4000-8000-0000000000' || lpad(group_no::text,2,'0'))::uuid,
sender_id,content,'text',now()-((group_no * 3 + seed_no) || ' hours')::interval
FROM msg
ON CONFLICT (id) DO UPDATE SET content=EXCLUDED.content,created_at=EXCLUDED.created_at;

WITH demo_groups(group_no,student_id,parent_id,teacher_id,theme,parent_note,teacher_note) AS (VALUES
(1,'18000001-0000-4000-8000-000000000001'::uuid,'28000001-0000-4000-8000-000000000001'::uuid,'38000001-0000-4000-8000-000000000001'::uuid,'东归历史路线','林宇辰历史文化课程进度已更新。','林宇辰提交了路线资料卡，请及时查看。'),
(2,'18000002-0000-4000-8000-000000000002'::uuid,'28000002-0000-4000-8000-000000000002'::uuid,'38000002-0000-4000-8000-000000000002'::uuid,'草原样方观察','陈欣怡自然科学课程进度已更新。','陈欣怡上传了样方观察记录，请及时查看。'),
(3,'18000003-0000-4000-8000-000000000003'::uuid,'28000003-0000-4000-8000-000000000003'::uuid,'38000003-0000-4000-8000-000000000003'::uuid,'丝路艺术观察','赵子墨艺术人文资料阅读已更新。','赵子墨提交了壁画色彩观察，请及时查看。'),
(4,'18000004-0000-4000-8000-000000000004'::uuid,'28000004-0000-4000-8000-000000000004'::uuid,'38000004-0000-4000-8000-000000000004'::uuid,'园林空间记录','黄雨萱园林观察任务进度已更新。','黄雨萱补充了框景照片，请及时查看。'),
(5,'18000005-0000-4000-8000-000000000005'::uuid,'28000005-0000-4000-8000-000000000005'::uuid,'38000005-0000-4000-8000-000000000005'::uuid,'社区公共空间调研','吴浩然社会实践安排已更新。','吴浩然创建了访谈提纲，请及时查看。'),
(6,'18000006-0000-4000-8000-000000000006'::uuid,'28000006-0000-4000-8000-000000000006'::uuid,'38000006-0000-4000-8000-000000000006'::uuid,'红色史料研读','徐嘉乐红色教育成果已更新。','徐嘉乐提交了朗读稿，请及时查看。'),
(7,'18000007-0000-4000-8000-000000000007'::uuid,'28000007-0000-4000-8000-000000000007'::uuid,'38000007-0000-4000-8000-000000000007'::uuid,'研学路线规划','杨欣小组协作进度已更新。','杨欣提交了路线草图，请及时查看。'),
(8,'18000008-0000-4000-8000-000000000008'::uuid,'28000008-0000-4000-8000-000000000008'::uuid,'38000008-0000-4000-8000-000000000008'::uuid,'湿地生态记录','李梦自然观察成果已更新。','李梦提交了水鸟观察记录，请及时查看。'),
(9,'18000009-0000-4000-8000-000000000009'::uuid,'28000009-0000-4000-8000-000000000009'::uuid,'38000009-0000-4000-8000-000000000009'::uuid,'城市更新访谈','高悦实践任务提醒已更新。','高悦提交了访谈记录，请及时查看。'),
(10,'18000010-0000-4000-8000-000000000010'::uuid,'28000010-0000-4000-8000-000000000010'::uuid,'38000010-0000-4000-8000-000000000010'::uuid,'海洋科技研学','罗恬海洋科技课程进度已更新。','罗恬提交了监测方案草稿，请及时查看。')
), notice(seed_no,group_no,user_id,title,message,notification_type) AS (
SELECT 1,group_no,student_id,theme || '任务提醒','你的研学任务有新的老师反馈。','task' FROM demo_groups
UNION ALL SELECT 2,group_no,parent_id,'孩子课程动态',parent_note,'parent' FROM demo_groups
UNION ALL SELECT 3,group_no,teacher_id,'新的待处理内容',teacher_note,'submission' FROM demo_groups
)
INSERT INTO notifications (id,user_id,title,message,notification_type,read_at,created_at)
SELECT ('18200000-0000-4000-8000-00000000' || lpad(group_no::text,2,'0') || lpad(seed_no::text,2,'0'))::uuid,
user_id,title,message,notification_type,NULL,now()-((group_no * 2 + seed_no) || ' hours')::interval
FROM notice
ON CONFLICT (id) DO UPDATE SET title=EXCLUDED.title,message=EXCLUDED.message,notification_type=EXCLUDED.notification_type,read_at=NULL,created_at=EXCLUDED.created_at;
