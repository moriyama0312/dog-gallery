interface Payload {
	[key: string]: any;
}

const queryCreator = (type: string, payload: Payload) => {
	let query = '';
	const isEmptyPayload = (Object.keys(payload).length === 0) ? true : false;
	switch(type) {
		case 'GET_TASKS':
			if(isEmptyPayload) {
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
		case 'POST_TASKS':
			if(payload) {
				if(payload.deadline) {
					// deadlineのDate型を変換するか考える
					query = 'INSERT INTO tasks_tbl (task_title, task_detail, task_status, task_category, task_createdby, task_charged, task_deadline) VALUES ($1, $2, $3, $4, $5, $6, $7);';
				}else {
					query = 'INSERT INTO tasks_tbl (task_title, task_detail, task_status, task_category, task_createdby, task_charged) VALUES ($1, $2, $3, $4, $5, $6);';
				}
			}
			break;
		case 'POST_PROFILES':
			if(payload) {
				if(payload.intro && payload.icon) {
					query = 'INSERT INTO profiles_tbl (profile_id, profile_name, profile_intro, profile_icon) VALUES ($1, $2, $3, $4);';
				}else if(payload.intro) {
					query = 'INSERT INTO profiles_tbl (profile_id, profile_name, profile_intro) VALUES ($1, $2, $3);';
				}else if(payload.icon) {
					query = 'INSERT INTO profiles_tbl (profile_id, profile_name, profile_icon) VALUES ($1, $2, $3);';
				}else {
					query = 'INSERT INTO profiles_tbl (profile_id, profile_name) VALUES ($1, $2);';
				}
			}
			break;
		case 'PUT_TASKS':
			if(payload) {
				// パターンが多いのでどうするか考える
			}
			break;
		case 'PUT_PROFILES':
			if(payload) {
				// パターンが多いのでどうするか考える
			}
			break;
		case 'DELETE_TASKS':
			query = 'DELETE FROM tasks_tbl WHERE id = $1';
			break;
		default:
			query = '';
			break;
	}

	return query;
};

export default queryCreator;
