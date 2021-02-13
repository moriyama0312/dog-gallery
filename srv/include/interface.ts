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
	title: string,
	detail: string,
	status: number,
	category: number,
	createdby: string,
	charged: string,
	deadline?: Date
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
	deadline?: Date
}
export interface PutProfiles {
	id: string,
	name?: string,
	intro?: string,
	icon?: number
}
// Delete
export interface DeleteTasks {
	id: number
}

// DBへの接続
export interface DbSetting {
	connectionString: string;
	ssl: { rejectUnauthorized: boolean };
}
