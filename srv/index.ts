const { PostgresClass } = require('./db/index');
// const { Client } = require('pg');
// import { Client } from 'pg';
// let express = require('express');
import * as express from 'express';
let app: express.Express = express();

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
app.get('/api/tasks', async (req, res) => {
	console.log(req);

	if(!postgres.connectedStatus) {
		await postgres.init();
	}

	try {
		const result = await postgres.getTasks('GET_TASKS');
		res.send(result);
	}catch(err) {
		res.send(err);
	}

});

const port = 3001;
app.listen(port);
