const getTasks = require('./api/get');
let express = require('express');
let app = express();
const mysql = require('mysql');
import {Connection} from 'mysql';
console.log('hoge');
// console.log(getFunc);

// DBへの接続
interface DatabaseConnectConfig {
	host: string;
	user: string;
	password: string;
	database: string;
}
const DatabaseConnectConfig: DatabaseConnectConfig = {
	host: 'localhost',
	user: 'root',
	password: 'admin',
	database: 'todolist_db'
}
const connection: Connection = mysql.createConnection(DatabaseConnectConfig);

connection.connect((err: any) => {
	if(err) {
		console.log('error connecting: ' + err.stack);
		return;
	}
	console.log('success');
	// console.log(getFunc);
	getTasks(connection, 0);
});

// app.get('/', () => {
// 	console.log('hoge');
// });
// app.get('/api/tasks', (req, res) => {
// 	const status = +req.query.status || 0;

// });

const port = 3001;
app.listen(port);
