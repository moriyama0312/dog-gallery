DROP DATABASE IF EXISTS test_db;
CREATE DATABASE IF NOT EXISTS todolist_db;
USE todolist_db;
DROP TABLE IF EXISTS test_tbl;
CREATE TABLE IF NOT EXISTS tasks_tbl (
	task_id SERIAL NOT NULL PRIMARY KEY,
	task_title TEXT NOT NULL,
	task_detail TEXT NOT NULL,
	task_status INT NOT NULL REFERENCES statuses_tbl (status_id),
	task_category INT NOT NULL REFERENCES categories_tbl (category_id),
	task_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	task_createdby TEXT NOT NULL REFERENCES users_tbl (user_name),
	task_charged TEXT NOT NULL REFERENCES users_tbl (user_name),
	task_deadline TIMESTAMP DEFAULT NULL
);
