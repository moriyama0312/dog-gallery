const getPostgresClass = require('./api/get');
const { PostgresClass } = require('./db/index');
const { Client } = require('pg');
let express = require('express');
let app = express();

const initializePostgres = async () => {
	const postgres = new PostgresClass();
	await postgres.init();
	const result = await postgres.getPosts('GET_TASKS');

	console.log(result);
}
initializePostgres();

// app.get('/', () => {
// 	console.log('hoge');
// });
// app.get('/api/tasks', (req, res) => {
// 	const status = +req.query.status || 0;

// });

const port = 3001;
app.listen(port);
