CREATE TABLE IF NOT EXISTS course_orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  course_id uuid NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  amount_cents integer NOT NULL DEFAULT 0 CHECK (amount_cents >= 0),
  currency text NOT NULL DEFAULT 'CNY',
  payment_method text NOT NULL DEFAULT 'manual_review',
  status text NOT NULL DEFAULT 'pending_payment' CHECK (status IN ('pending_payment','awaiting_review','paid','cancelled','refunded')),
  contact_info jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  paid_at timestamptz,
  cancelled_at timestamptz
);

CREATE INDEX IF NOT EXISTS idx_course_orders_user ON course_orders(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_course_orders_course ON course_orders(course_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_course_orders_status ON course_orders(status, created_at DESC);

CREATE TABLE IF NOT EXISTS payment_events (
  id bigserial PRIMARY KEY,
  order_id uuid NOT NULL REFERENCES course_orders(id) ON DELETE CASCADE,
  event_type text NOT NULL,
  payload jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);
