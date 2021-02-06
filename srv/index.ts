import * as express from 'express';
import { Postgres } from './db/index';
import * as interfaces from './include/interface';
let app: express.Express = express();

const postgres = new Postgres();
const initializePostgres = async () => {
	await postgres.init();
	// console.log(postgres.connectedStatus);
	// const result = await postgres.getTasks('GET_TASKS');

	// console.log(result);
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
		// const result = await postgres.getTasks('GET_TASKS');
		const result = await postgres.getMethod<interfaces.GetTasks>('GET_TASKS');
		res.send(result);
	}catch(err) {
		res.send(err);
	}

});

const port = 3001;
app.listen(port);
