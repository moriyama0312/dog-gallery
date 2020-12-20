DROP DATABASE IF EXISTS test_db;
CREATE DATABASE todolist_db;
USE todolist_db;
DROP TABLE IF EXISTS test_tbl;
CREATE TABLE tasks_tbl (
	task_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	task_title TEXT NOT NULL,
	task_detail TEXT NOT NULL,
	task_status INT NOT NULL,
	task_category INT NOT NULL,
	task_created INT NOT NULL,
	task_deadline INT
);
