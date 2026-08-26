UPDATE users SET display_name = '知行管理员', updated_at = now() WHERE email = '3023921292@qq.com' AND display_name LIKE '%?%';
UPDATE users SET display_name = '研学学生', updated_at = now() WHERE email = 'student@zhixing.study' AND display_name LIKE '%?%';
UPDATE users SET display_name = '研学家长', updated_at = now() WHERE email = 'parent@zhixing.study' AND display_name LIKE '%?%';
UPDATE users SET display_name = '研学老师', updated_at = now() WHERE email = 'teacher@zhixing.study' AND display_name LIKE '%?%';
