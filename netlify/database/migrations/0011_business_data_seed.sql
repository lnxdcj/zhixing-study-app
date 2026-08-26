ALTER TABLE courses ADD COLUMN IF NOT EXISTS price_cents integer NOT NULL DEFAULT 0 CHECK (price_cents >= 0);

CREATE TABLE IF NOT EXISTS community_rules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  enabled boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

INSERT INTO community_rules (title, description, enabled, sort_order) VALUES
('真实身份发布', '发布社区内容时应使用真实姓名或学校可识别身份，避免匿名造谣。', true, 10),
('内容匹配主题', '照片、文字和标签必须与研学主题一致，不得无关拼贴。', true, 20),
('未成年人保护', '不得公开学生身份证、手机号、家庭住址等敏感信息。', true, 30),
('先审后发', '敏感内容、投诉内容和外链内容必须先进入管理员审核。', true, 40),
('版权合规', '引用照片、视频、地图和资料时应标注真实来源。', true, 50)
ON CONFLICT DO NOTHING;

UPDATE courses SET price_cents = 12800 WHERE slug = 'history-culture';
UPDATE courses SET price_cents = 10800 WHERE slug = 'natural-science';
UPDATE courses SET price_cents = 16800 WHERE slug = 'frontier-technology';
UPDATE courses SET price_cents = 9800 WHERE slug = 'arts-humanities';
UPDATE courses SET price_cents = 8600 WHERE slug = 'red-education';
UPDATE courses SET price_cents = 7600 WHERE slug = 'social-practice';

UPDATE users SET
  display_name = CASE email
    WHEN 'demo.student@zhixing.study' THEN '赵同学'
    WHEN 'demo.parent@zhixing.study' THEN '赵妈妈'
    WHEN 'demo.teacher@zhixing.study' THEN '李老师'
    WHEN 'demo.admin@zhixing.study' THEN '平台管理员'
    ELSE display_name END,
  school = CASE email
    WHEN 'demo.student@zhixing.study' THEN '北京市第一中学'
    WHEN 'demo.parent@zhixing.study' THEN '北京市第一中学'
    WHEN 'demo.teacher@zhixing.study' THEN '知行研学中心'
    WHEN 'demo.admin@zhixing.study' THEN '知行研学平台'
    ELSE school END,
  email_verified_at = COALESCE(email_verified_at, created_at),
  updated_at = now()
WHERE email IN ('demo.student@zhixing.study','demo.parent@zhixing.study','demo.teacher@zhixing.study','demo.admin@zhixing.study');

INSERT INTO community_posts (id, author_id, category, content, location, status, created_at) VALUES
('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaa1001', '11111111-1111-4111-8111-111111111111', '研学日记', '承德这堂课让我第一次把历史地图、实地建筑和课堂视频联系起来，东归路线一下子清晰了。', '承德', 'published', now()-interval '3 days'),
('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaa1002', '33333333-3333-4333-8333-333333333333', '成果展示', '今天下发了《草原生态样方调查》任务，重点看学生能不能把观察、记录和结论对应起来。', '草原研学基地', 'published', now()-interval '2 days'),
('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaa1003', '22222222-2222-4222-8222-222222222222', '家长视角', '孩子回家后主动整理了路线图和作业，能看见学习过程，这种研学比单纯看视频更有连续性。', '家长端', 'published', now()-interval '1 day'),
('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaa1004', '33333333-3333-4333-8333-333333333333', '审核中内容', '一条待审核的课堂反馈帖，便于管理员示范审核流。', '平台后台', 'pending', now()-interval '8 hours')
ON CONFLICT (id) DO UPDATE SET
  author_id = EXCLUDED.author_id,
  category = EXCLUDED.category,
  content = EXCLUDED.content,
  location = EXCLUDED.location,
  status = EXCLUDED.status,
  created_at = EXCLUDED.created_at;

INSERT INTO audit_logs (actor_id, action, target_type, target_id, metadata, ip_hash, created_at) VALUES
(NULL, 'seed.business_data', 'system', 'community_rules', '{}'::jsonb, '', now()-interval '1 minute')
ON CONFLICT DO NOTHING;
