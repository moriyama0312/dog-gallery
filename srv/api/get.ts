import {Connection, MysqlError} from 'mysql';

const getTasks = (connection: Connection, status: number) => {
	const query: string = (status = 0) ? `SELECT * FROM tasks_tbl` : `SELECT * FROM tasks_tbl WHERE task_status = ${status}`;
	connection.query(query, (err: MysqlError | null, results) => {
		if(err) {
			console.log('Error!');
			return;
		}
		console.log(results);
	});
}
module.exports = getTasks;
