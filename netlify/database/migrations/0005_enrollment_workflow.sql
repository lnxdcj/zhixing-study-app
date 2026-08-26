CREATE INDEX IF NOT EXISTS idx_enrollments_user ON enrollments(user_id, enrolled_at DESC);
CREATE INDEX IF NOT EXISTS idx_enrollments_course ON enrollments(course_id, enrolled_at DESC);
