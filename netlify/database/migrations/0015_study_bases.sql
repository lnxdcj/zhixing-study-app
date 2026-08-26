CREATE TABLE IF NOT EXISTS study_bases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  city text NOT NULL DEFAULT '',
  address text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  cover_url text NOT NULL DEFAULT '',
  latitude numeric(10,7),
  longitude numeric(10,7),
  status text NOT NULL DEFAULT 'published' CHECK (status IN ('draft','published','hidden')),
  created_by uuid REFERENCES users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS study_bases_status_idx ON study_bases(status);
CREATE INDEX IF NOT EXISTS study_bases_created_by_idx ON study_bases(created_by);

INSERT INTO study_bases (title,city,address,description,cover_url,latitude,longitude,status)
VALUES
  ('承德避暑山庄研学基地','承德','河北省承德市双桥区丽正门路20号','面向历史文化、民族团结和清代建筑观察的综合研学基地。','https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chengde_Putuo_Zongcheng_Temple_201208.JPG/1280px-Chengde_Putuo_Zongcheng_Temple_201208.JPG',40.9861000,117.9392000,'published'),
  ('内蒙古草原生态研学基地','呼伦贝尔','内蒙古自治区呼伦贝尔草原研学营地','适合草原生态系统、植物样方调查和牧区文化课程。','https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Ewenki_Grasslands_and_Yurt_Scene_%2819785364532%29.jpg/1280px-Ewenki_Grasslands_and_Yurt_Scene_%2819785364532%29.jpg',49.2116000,119.7658000,'published'),
  ('敦煌丝路文化研学基地','敦煌','甘肃省敦煌市鸣山北路','用于丝绸之路、壁画艺术和中外文明交流主题课程。','https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mural_-_Mogao_Caves%2C_Dunhuang.jpg/1280px-Mural_-_Mogao_Caves%2C_Dunhuang.jpg',40.1421000,94.6619000,'published')
ON CONFLICT DO NOTHING;
