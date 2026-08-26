INSERT INTO course_contents (course_id,content_type,title,body,sort_order,published)
SELECT c.id,'homework','东归路线证据包提交',
jsonb_build_object('description','学生需提交路线图、现场照片、讲解视频或资料文件，说明土尔扈特东归关键证据。','dueAt','2026-08-02T18:00'),
25,true
FROM courses c
WHERE c.slug='history-culture'
AND NOT EXISTS (SELECT 1 FROM course_contents cc WHERE cc.course_id=c.id AND cc.title='东归路线证据包提交');

INSERT INTO course_contents (course_id,content_type,title,body,sort_order,published)
SELECT c.id,'homework','生态样方观察报告',
jsonb_build_object('description','学生需提交样方照片、观察记录表、现场短视频或文档，说明植物种类和生态关系。','dueAt','2026-08-05T20:00'),
25,true
FROM courses c
WHERE c.slug='natural-science'
AND NOT EXISTS (SELECT 1 FROM course_contents cc WHERE cc.course_id=c.id AND cc.title='生态样方观察报告');

INSERT INTO submissions (id,content_id,student_id,text_content,status,score,teacher_feedback,graded_by,graded_at,submitted_at)
SELECT '44444444-4444-4444-8444-444444444444', cc.id, '11111111-1111-4111-8111-111111111111',
'我已整理东归路线中的关键节点，包含路线图、现场照片和小组讲解稿。重点说明承德阶段的历史背景、民族交流证据和现场研学观察。',
'graded',92,'材料完整，路线证据清楚。建议在结论中补充一条个人观察。','33333333-3333-4333-8333-333333333333',now()-interval '1 day',now()-interval '3 days'
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
SELECT '55555555-5555-4555-8555-555555555555', cc.id, '11111111-1111-4111-8111-111111111111',
'今日完成植物样方记录，已上传样方照片、物种数量表和现场观察短视频，等待老师批改。',
'submitted',now()-interval '8 hours'
FROM course_contents cc JOIN courses c ON c.id=cc.course_id
WHERE c.slug='natural-science' AND cc.title='生态样方观察报告'
ON CONFLICT (id) DO UPDATE SET
content_id=EXCLUDED.content_id,
text_content=EXCLUDED.text_content,
status=EXCLUDED.status,
score=NULL,
teacher_feedback='',
submitted_at=EXCLUDED.submitted_at;

INSERT INTO submission_files (submission_id,blob_key,file_name,mime_type,size_bytes,file_data)
VALUES
('44444444-4444-4444-8444-444444444444','demo/history-route-map','东归路线图.png','image/png',68,decode('89504e470d0a1a0a0000000d49484452000000010000000108060000001f15c4890000000b49444154789c6360f8ffff3f0005fe02fea7cd2d9b0000000049454e44ae426082','hex')),
('44444444-4444-4444-8444-444444444444','demo/history-notes','证据说明.txt','text/plain',96,convert_to('承德阶段证据：避暑山庄、普陀宗乘之庙、民族交流史料摘录。','UTF8')),
('55555555-5555-4555-8555-555555555555','demo/ecology-sample-photo','样方照片.png','image/png',68,decode('89504e470d0a1a0a0000000d49484452000000010000000108060000001f15c4890000000b49444154789c6360f8ffff3f0005fe02fea7cd2d9b0000000049454e44ae426082','hex')),
('55555555-5555-4555-8555-555555555555','demo/ecology-field-note','观察记录.txt','text/plain',84,convert_to('样方一：禾本科植物较多，覆盖度约65%，发现昆虫活动痕迹。','UTF8'))
ON CONFLICT (blob_key) DO UPDATE SET
file_name=EXCLUDED.file_name,
mime_type=EXCLUDED.mime_type,
size_bytes=EXCLUDED.size_bytes,
file_data=EXCLUDED.file_data;

INSERT INTO learning_progress (user_id,content_id,status,progress,duration_seconds,state,updated_at)
SELECT '11111111-1111-4111-8111-111111111111', cc.id,
CASE WHEN cc.title='东归路线证据包提交' THEN 'submitted' ELSE 'submitted' END,
100,900,jsonb_build_object('source','teacher-assignment-demo'),now()-interval '8 hours'
FROM course_contents cc JOIN courses c ON c.id=cc.course_id
WHERE c.slug IN ('history-culture','natural-science') AND cc.title IN ('东归路线证据包提交','生态样方观察报告')
ON CONFLICT (user_id,content_id) DO UPDATE SET
status=EXCLUDED.status,
progress=EXCLUDED.progress,
duration_seconds=EXCLUDED.duration_seconds,
state=EXCLUDED.state,
updated_at=EXCLUDED.updated_at;

INSERT INTO notifications (id,user_id,title,message,notification_type,read_at,created_at)
VALUES
('aaaaaaaa-1111-4111-8111-111111111111','11111111-1111-4111-8111-111111111111','老师下发了新作业','《自然科学研学》新增作业：生态样方观察报告。','assignment',NULL,now()-interval '8 hours'),
('aaaaaaaa-2222-4222-8222-222222222222','22222222-2222-4222-8222-222222222222','学生作业动态','赵同学提交了生态样方观察报告，家长端可查看。','parent',NULL,now()-interval '8 hours'),
('aaaaaaaa-3333-4333-8333-333333333333','33333333-3333-4333-8333-333333333333','待批改作业','赵同学提交了生态样方观察报告。','submission',NULL,now()-interval '8 hours')
ON CONFLICT (id) DO UPDATE SET title=EXCLUDED.title,message=EXCLUDED.message,read_at=EXCLUDED.read_at,created_at=EXCLUDED.created_at;
