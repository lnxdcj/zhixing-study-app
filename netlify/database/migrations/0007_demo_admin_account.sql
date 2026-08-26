INSERT INTO users (id,email,password_hash,display_name,role,school,avatar_url,status,points)
VALUES
('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa','demo.admin@zhixing.study','scrypt$1FGWCssuaPbc_cvVQg7q9g$3vMMorqcIz02y5AUpPQiee1WGPwZ-d9bYlUr-mqDaGSp9ptZX9ASVpmk0TBtX3wXt0tNqrMPjNMfMFiGMacepg','平台管理员-赵老师','admin','知行研学平台','https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=240&q=80','active',0)
ON CONFLICT (email) DO UPDATE SET
password_hash=EXCLUDED.password_hash,
display_name=EXCLUDED.display_name,
role=EXCLUDED.role,
school=EXCLUDED.school,
avatar_url=EXCLUDED.avatar_url,
status='active',
updated_at=now();
