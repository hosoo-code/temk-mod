-- Repair approved moderator applications that do not yet have a moderators row.
-- Safe to run more than once: existing moderator rows are updated, not duplicated.
DO $$
DECLARE r record; m_id uuid;
BEGIN
  FOR r IN
    SELECT * FROM public.moderator_applications WHERE status = 'approved'
  LOOP
    SELECT id INTO m_id FROM public.moderators WHERE user_id = r.user_id LIMIT 1;
    IF m_id IS NULL THEN
      INSERT INTO public.moderators (
        user_id, full_name, nickname, facebook_url,
        verification_status, verified_at, became_moderator_at, is_active, is_public
      ) VALUES (
        r.user_id, r.full_name, r.nickname, r.facebook_link,
        'approved', COALESCE(r.approved_at, now()), COALESCE(r.approved_at, now()), true, true
      ) RETURNING id INTO m_id;
    ELSE
      UPDATE public.moderators SET
        full_name = r.full_name, nickname = r.nickname, facebook_url = r.facebook_link,
        verification_status = 'approved', is_active = true, is_public = true
      WHERE id = m_id;
    END IF;
    UPDATE public.profiles SET moderator_id = m_id WHERE id = r.user_id;
    m_id := NULL;
  END LOOP;
END $$;
