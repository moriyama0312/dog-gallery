const getTasks = require('./api/get');
const { Client } = require('pg');
let express = require('express');
let app = express();
console.log('hoge');
// console.log(getFunc);

// DBへの接続
interface DbSetting {
	connectionString: string;
	ssl: { rejectUnauthorized: boolean };
}
const DbSetting: DbSetting = {
	connectionString: process.env.DATABASE_URL || 'postgres://ltekopzxfbigxk:8a231cb186de5400a491174de781f37bc1d0373c111dcca1acd4d305fc8cc741@ec2-54-156-73-147.compute-1.amazonaws.com:5432/d8vf9g7eb00i29',
	ssl: { rejectUnauthorized: false }
};
console.log(process.env.DATABASE_URL);

const client = new Client(DbSetting);

client.connect();
console.log('connect');
const testQuery: string = 'SELECT * FROM tasks_tbl;';
client.query(testQuery, (err:any, res:any) => {
	if(err) {
		console.log(err);
	}else {
		console.log(res);
	}
	client.end();
});

// app.get('/', () => {
// 	console.log('hoge');
// });
// app.get('/api/tasks', (req, res) => {
// 	const status = +req.query.status || 0;

// });

const port = 3001;
app.listen(port);
