INSERT INTO users (id,email,password_hash,display_name,role,school,avatar_url,status,points,email_verified_at)
VALUES
('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa',
 'demo.admin@zhixing.study',
 'scrypt$AmNgSYDB-bpj7qV1e-cVSA$5-yPkQP7YQ2A4R0E4tSR2a1JcwcwtlI0-HYieDwM-Yu0Pd9QwUwPXWZlPpd2nT06vYeM-2omWmILpEKk4vNEsg',
 '平台管理员',
 'admin',
 '知行研学平台',
 './assets/images/local/img-11-8fe1e93a3f.jpg',
 'active',
 0,
 now())
ON CONFLICT (email) DO UPDATE SET
password_hash=EXCLUDED.password_hash,
display_name=EXCLUDED.display_name,
role='admin',
school=EXCLUDED.school,
avatar_url=EXCLUDED.avatar_url,
status='active',
email_verified_at=COALESCE(users.email_verified_at, now()),
updated_at=now();
