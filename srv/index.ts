const getPostgresClass = require('./api/get');
const { PostgresClass } = require('./db/index');
const { Client } = require('pg');
let express = require('express');
let app = express();

const postgres = new PostgresClass();
const initializePostgres = async () => {
	await postgres.init();
	console.log(postgres.connectedStatus);
	const result = await postgres.getTasks('GET_TASKS');

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
