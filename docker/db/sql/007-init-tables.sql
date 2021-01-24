INSERT INTO tasks_tbl VALUES(1, 'テストタスクです', 'テスト用に投稿されたタスクです', 1, 1, UNIX_TIMESTAMP(), NULL);

INSERT INTO statuses_tbl VALUES(1, '未着手');
INSERT INTO statuses_tbl VALUES(2, '作業中');
INSERT INTO statuses_tbl VALUES(3, '完了');

INSERT INTO categories_tbl VALUES(1, '趣味');
INSERT INTO categories_tbl VALUES(2, '仕事');
INSERT INTO categories_tbl VALUES(3, '勉強');
INSERT INTO categories_tbl VALUES(4, '交際');
INSERT INTO categories_tbl VALUES(5, 'その他');
