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
app.get('/api/:type', async (req, res) => {
	// console.log(req);
	console.log(req.query);
	const type = req.params.type;
	const query = req.query;

	if(!postgres.connectedStatus) {
		await postgres.init();
	}

	try {
		if(type === 'tasks') {
			const result = await postgres.getMethod<interfaces.GetTasks>('GET_TASKS', query);
			res.send(result);
		}else if(type === 'profiles') {
			const result = await postgres.getMethod<interfaces.GetProfiles>('GET_PROFILES', query);
			res.send(result);
		}else if(type === 'icons') {
			const result = await postgres.getMethod<interfaces.GetIcons>('GET_ICONS', query);
			res.send(result);
		}
	}catch(err) {
		res.send(err);
	}

});

const port = 3001;
app.listen(port);
