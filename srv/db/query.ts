interface Payload {
	[key: string]: string | number;
}

const querySwitch = (type: string, payload?: Payload) => {
	let query = '';
	switch(type) {
		case 'GET_TASKS':
			if(!payload) {
				query = 'SELECT * FROM tasks_tbl;';
			} else if(payload.id) {
				query = 'SELECT * FROM tasks_tbl WHERE task_id = $1;';
			} else if(payload.user) {
				query = 'SELECT * FROM tasks_tbl WHERE task_charged = $1;';
			}
			break;
		default:
			query = '';
			break;
	}

	return query;
};

module.exports.queryCreator = querySwitch;
