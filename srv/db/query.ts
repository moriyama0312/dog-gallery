interface Payload {
	[key: string]: string | number;
}

const querySwitch = (type: string, payload?: Payload) => {
	let query = '';
	switch(type) {
		case 'GET_TASKS':
			if(!payload) {
				query = 'SELECT * FROM tasks_tbl;';
			}else if(payload.id) {
				query = 'SELECT * FROM tasks_tbl WHERE task_id = $1;';
			}else if(payload.user) {
				query = 'SELECT * FROM tasks_tbl WHERE task_charged = $1;';
			}else if(payload.status) {
				query = 'SELECT * FROM tasks_tbl WHERE task_status = $1;';
			}else if(payload.range) {
				query = 'SELECT * FROM tasks_tbl WHERE task_deadline < ( CURRENT_TIMESTAMP + $1 );';
			}
			break;
		case 'GET_PROFILES':
			if(!payload) {
				query = 'SELECT * FROM profiles_tbl;'
			}else if(payload.user) {
				query = 'SELECT * FROM profiles_tbl WHERE profile_id = $1;';
			}
			break;
		case 'GET_ICONS':
			query = 'SELECT * FROM icons_tbl;';
			break;
		default:
			query = '';
			break;
	}

	return query;
};

module.exports.queryCreator = querySwitch;
