CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  password_hash text NOT NULL,
  display_name text NOT NULL,
  role text NOT NULL CHECK (role IN ('student','teacher','parent','admin')),
  school text NOT NULL DEFAULT '',
  avatar_url text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('pending','active','disabled')),
  points integer NOT NULL DEFAULT 0 CHECK (points >= 0),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token_hash text NOT NULL UNIQUE,
  expires_at timestamptz NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE parent_students (
  parent_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  student_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  relation text NOT NULL DEFAULT '监护人',
  approved_at timestamptz,
  PRIMARY KEY (parent_id, student_id)
);

CREATE TABLE courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  category text NOT NULL,
  description text NOT NULL DEFAULT '',
  cover_url text NOT NULL DEFAULT '',
  teacher_id uuid REFERENCES users(id) ON DELETE SET NULL,
  status text NOT NULL DEFAULT 'published' CHECK (status IN ('draft','published','archived')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE course_contents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  content_type text NOT NULL CHECK (content_type IN ('video','task','homework','test','material')),
  title text NOT NULL,
  body jsonb NOT NULL DEFAULT '{}'::jsonb,
  sort_order integer NOT NULL DEFAULT 0,
  published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE enrollments (
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  course_id uuid NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  enrolled_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, course_id)
);

CREATE TABLE learning_progress (
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  content_id uuid NOT NULL REFERENCES course_contents(id) ON DELETE CASCADE,
  status text NOT NULL DEFAULT 'started' CHECK (status IN ('started','completed','submitted')),
  progress integer NOT NULL DEFAULT 0 CHECK (progress BETWEEN 0 AND 100),
  duration_seconds integer NOT NULL DEFAULT 0 CHECK (duration_seconds >= 0),
  state jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, content_id)
);

CREATE TABLE submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content_id uuid NOT NULL REFERENCES course_contents(id) ON DELETE CASCADE,
  student_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  text_content text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'submitted' CHECK (status IN ('draft','submitted','returned','graded')),
  score numeric(5,2),
  teacher_feedback text NOT NULL DEFAULT '',
  submitted_at timestamptz NOT NULL DEFAULT now(),
  graded_by uuid REFERENCES users(id) ON DELETE SET NULL,
  graded_at timestamptz
);

CREATE TABLE submission_files (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id uuid NOT NULL REFERENCES submissions(id) ON DELETE CASCADE,
  blob_key text NOT NULL UNIQUE,
  file_name text NOT NULL,
  mime_type text NOT NULL,
  size_bytes bigint NOT NULL CHECK (size_bytes >= 0),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE certificates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  course_id uuid NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  certificate_no text NOT NULL UNIQUE,
  issued_at timestamptz NOT NULL DEFAULT now(),
  verified boolean NOT NULL DEFAULT true,
  UNIQUE (user_id, course_id)
);

CREATE TABLE community_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  category text NOT NULL DEFAULT '动态',
  content text NOT NULL,
  location text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'published' CHECK (status IN ('pending','published','hidden')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE post_media (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid NOT NULL REFERENCES community_posts(id) ON DELETE CASCADE,
  blob_key text NOT NULL UNIQUE,
  mime_type text NOT NULL,
  alt_text text NOT NULL DEFAULT '',
  sort_order integer NOT NULL DEFAULT 0
);

CREATE TABLE comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid NOT NULL REFERENCES community_posts(id) ON DELETE CASCADE,
  author_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  parent_id uuid REFERENCES comments(id) ON DELETE CASCADE,
  content text NOT NULL,
  status text NOT NULL DEFAULT 'published' CHECK (status IN ('published','hidden')),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE reactions (
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  target_type text NOT NULL CHECK (target_type IN ('post','comment')),
  target_id uuid NOT NULL,
  reaction text NOT NULL DEFAULT 'like',
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, target_type, target_id)
);

CREATE TABLE conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL DEFAULT '',
  conversation_type text NOT NULL DEFAULT 'direct' CHECK (conversation_type IN ('direct','group','course','system')),
  created_by uuid REFERENCES users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE conversation_members (
  conversation_id uuid NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  last_read_at timestamptz,
  PRIMARY KEY (conversation_id, user_id)
);

CREATE TABLE messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id uuid NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
  sender_id uuid REFERENCES users(id) ON DELETE SET NULL,
  content text NOT NULL,
  message_type text NOT NULL DEFAULT 'text' CHECK (message_type IN ('text','image','file','system')),
  blob_key text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title text NOT NULL,
  message text NOT NULL DEFAULT '',
  notification_type text NOT NULL DEFAULT 'info',
  read_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE map_routes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  owner_id uuid REFERENCES users(id) ON DELETE SET NULL,
  points jsonb NOT NULL DEFAULT '[]'::jsonb,
  distance_meters integer NOT NULL DEFAULT 0,
  published boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE track_points (
  id bigserial PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  route_id uuid REFERENCES map_routes(id) ON DELETE SET NULL,
  longitude numeric(10,7) NOT NULL,
  latitude numeric(10,7) NOT NULL,
  accuracy numeric(8,2),
  recorded_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL DEFAULT '',
  points_price integer NOT NULL CHECK (points_price > 0),
  stock integer NOT NULL DEFAULT 0 CHECK (stock >= 0),
  image_url text NOT NULL DEFAULT '',
  active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  product_id uuid NOT NULL REFERENCES products(id),
  quantity integer NOT NULL DEFAULT 1 CHECK (quantity > 0),
  points_total integer NOT NULL CHECK (points_total > 0),
  status text NOT NULL DEFAULT 'created' CHECK (status IN ('created','fulfilled','cancelled')),
  delivery_info jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE points_ledger (
  id bigserial PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  amount integer NOT NULL,
  reason text NOT NULL,
  reference_type text,
  reference_id uuid,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE user_settings (
  user_id uuid PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  settings jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE SET NULL,
  content text NOT NULL,
  status text NOT NULL DEFAULT 'open' CHECK (status IN ('open','processing','resolved')),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE audit_logs (
  id bigserial PRIMARY KEY,
  actor_id uuid REFERENCES users(id) ON DELETE SET NULL,
  action text NOT NULL,
  target_type text NOT NULL DEFAULT '',
  target_id text NOT NULL DEFAULT '',
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  ip_hash text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE error_reports (
  id bigserial PRIMARY KEY,
  user_id uuid REFERENCES users(id) ON DELETE SET NULL,
  message text NOT NULL,
  stack text,
  url text NOT NULL DEFAULT '',
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_sessions_token ON sessions(token_hash);
CREATE INDEX idx_progress_user ON learning_progress(user_id, updated_at DESC);
CREATE INDEX idx_submissions_student ON submissions(student_id, submitted_at DESC);
CREATE INDEX idx_submissions_content ON submissions(content_id, status);
CREATE INDEX idx_posts_created ON community_posts(status, created_at DESC);
CREATE INDEX idx_comments_post ON comments(post_id, created_at);
CREATE INDEX idx_messages_conversation ON messages(conversation_id, created_at DESC);
CREATE INDEX idx_notifications_user ON notifications(user_id, created_at DESC);
CREATE INDEX idx_audit_created ON audit_logs(created_at DESC);

INSERT INTO products (title, description, points_price, stock) VALUES
('研学主题笔记本', '硬壳方格内页', 300, 100),
('承德文化纪念书签', '金属材质纪念书签', 180, 80),
('自然观察工具包', '放大镜、记录卡和收纳袋', 680, 40),
('课程学习券', '解锁一门专题课程', 500, 200);

INSERT INTO courses (slug,title,category,description,status) VALUES
('history-culture','历史文化主题学习包','历史文化','历史课程、任务、作业、测试与资料','published'),
('natural-science','自然科学主题学习包','自然科学','自然观察与科学探究课程','published'),
('frontier-technology','科技前沿主题学习包','科技前沿','航天与工程创新课程','published'),
('arts-humanities','艺术人文主题学习包','艺术人文','艺术观察与人文实践课程','published'),
('red-education','红色教育主题学习包','红色教育','革命历史与家国教育课程','published'),
('social-practice','社会实践主题学习包','社会实践','调查、访谈与志愿服务课程','published');

INSERT INTO course_contents (course_id,content_type,title,body,sort_order)
SELECT c.id,'homework',v.title,jsonb_build_object('description',v.description),v.sort_order
FROM courses c JOIN (VALUES
('history-culture','渥巴锡人物档案','根据课程和史料整理渥巴锡的生平、重要选择及历史影响。',1),
('history-culture','两则东归史料对读','比较两则史料的作者、时间、核心观点和证据差异。',2),
('natural-science','样方数据分析报告','计算样方内各植物的相对数量并解释环境影响。',1),
('natural-science','一页自然观察笔记','用图文记录代表物种的形态、环境和问题。',2),
('frontier-technology','发射窗口影响因素分析','分析轨道、天气、安全和任务准备因素。',1),
('frontier-technology','航天工程职业采访提纲','准备覆盖专业学习、协作和工程伦理的采访问题。',2),
('arts-humanities','传统纹样再设计','保留传统纹样核心结构并完成现代应用设计。',1),
('arts-humanities','昆曲表演观察报告','从唱腔、动作、服饰和舞台空间完成观看记录。',2),
('red-education','井冈山道路主题短文','结合现场学习解释历史条件与现实启示。',1),
('red-education','革命人物口述讲解稿','依据可靠史料完成三分钟口述讲解稿。',2),
('social-practice','社区调查数据报告','将观察或问卷数据整理成图表并提出结论。',1),
('social-practice','志愿服务反思日志','记录服务行动、问题和改进方向。',2)
) AS v(slug,title,description,sort_order) ON c.slug=v.slug;
