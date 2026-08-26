-- Bind every showcase group as real contacts. Each member can open a
-- persistent direct conversation while the seeded three-person chat remains.
WITH demo_groups(student_id,parent_id,teacher_id) AS (VALUES
('18000001-0000-4000-8000-000000000001'::uuid,'28000001-0000-4000-8000-000000000001'::uuid,'38000001-0000-4000-8000-000000000001'::uuid),
('18000002-0000-4000-8000-000000000002'::uuid,'28000002-0000-4000-8000-000000000002'::uuid,'38000002-0000-4000-8000-000000000002'::uuid),
('18000003-0000-4000-8000-000000000003'::uuid,'28000003-0000-4000-8000-000000000003'::uuid,'38000003-0000-4000-8000-000000000003'::uuid),
('18000004-0000-4000-8000-000000000004'::uuid,'28000004-0000-4000-8000-000000000004'::uuid,'38000004-0000-4000-8000-000000000004'::uuid),
('18000005-0000-4000-8000-000000000005'::uuid,'28000005-0000-4000-8000-000000000005'::uuid,'38000005-0000-4000-8000-000000000005'::uuid),
('18000006-0000-4000-8000-000000000006'::uuid,'28000006-0000-4000-8000-000000000006'::uuid,'38000006-0000-4000-8000-000000000006'::uuid),
('18000007-0000-4000-8000-000000000007'::uuid,'28000007-0000-4000-8000-000000000007'::uuid,'38000007-0000-4000-8000-000000000007'::uuid),
('18000008-0000-4000-8000-000000000008'::uuid,'28000008-0000-4000-8000-000000000008'::uuid,'38000008-0000-4000-8000-000000000008'::uuid),
('18000009-0000-4000-8000-000000000009'::uuid,'28000009-0000-4000-8000-000000000009'::uuid,'38000009-0000-4000-8000-000000000009'::uuid),
('18000010-0000-4000-8000-000000000010'::uuid,'28000010-0000-4000-8000-000000000010'::uuid,'38000010-0000-4000-8000-000000000010'::uuid)
), contact_pairs(requester_id,addressee_id) AS (
  SELECT student_id,parent_id FROM demo_groups
  UNION ALL SELECT student_id,teacher_id FROM demo_groups
  UNION ALL SELECT parent_id,teacher_id FROM demo_groups
)
INSERT INTO friendships(requester_id,addressee_id,status,created_at,accepted_at)
SELECT requester_id,addressee_id,'accepted',now(),now()
FROM contact_pairs
ON CONFLICT ((LEAST(requester_id,addressee_id)),(GREATEST(requester_id,addressee_id)))
DO UPDATE SET status='accepted',accepted_at=now();

UPDATE conversations
SET conversation_type='group'
WHERE id::text LIKE '18180000-0000-4000-8000-0000000000__'
  AND (SELECT count(*) FROM conversation_members cm WHERE cm.conversation_id=conversations.id) > 2;
