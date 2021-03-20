// Payload関連
// Get
export interface GetTasks {
	id?: number,
	user?: string,
	status?: number,
	range?: number
}
export interface GetProfiles {
	user?: string
}
export interface GetIcons {
	id?: number
}
// Post
export interface PostTasks {
	task_title: string,
	task_detail: string,
	task_status: number,
	task_category: number,
	task_createdby: string,
	task_charged: string,
	task_deadline?: string
}
// interface PostProfiles {
// 	id: string,
// 	name: string,
// 	intro?: string,
// 	icon?: number
// }
// Put
export interface PutTasks {
	id: number,
	title?: string,
	detail?: string,
	status?: number,
	category?: number,
	charged?: string,
	deadline?: string
}
export interface PutProfiles {
	id: string,
	name?: string,
	intro?: string,
	icon?: number
}
// Delete
export interface DeleteTasks {
	task_id: number
}

// DBへの接続
export interface DbSetting {
	connectionString: string;
	ssl: { rejectUnauthorized: boolean };
}
