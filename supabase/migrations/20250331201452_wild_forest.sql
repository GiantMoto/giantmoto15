/*
  # Create contact messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text, nullable)
      - `car_brand` (text)
      - `car_year` (integer)
      - `car_model` (text)
      - `title` (text)
      - `message` (text)
      - `created_at` (timestamp)
      - `gdpr_accepted` (boolean)

  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for authenticated service role to insert data
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  car_brand text NOT NULL,
  car_year integer NOT NULL,
  car_model text NOT NULL,
  title text NOT NULL,
  message text NOT NULL,
  gdpr_accepted boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert contact messages"
  ON contact_messages
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can read contact messages"
  ON contact_messages
  FOR SELECT
  TO service_role
  USING (true);