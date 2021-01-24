CREATE TABLE IF NOT EXISTS profiles_tbl (
	profile_id TEXT NOT NULL PRIMARY KEY,
	profile_name TEXT NOT NULL,
	profile_intro TEXT DEFAULT 'No Introduction',
	profile_icon INT DEFAULT 0,
	profile_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- iconの0はダミー
