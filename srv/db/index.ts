const { Pool } = require('pg');
const { queryCreator } = require('./query.ts');

// Payload関連
// Get
interface GetTasks {
	id?: number,
	user?: string,
	status?: number,
	range?: number
}
interface GetProfiles {
	user?: string
}
// Post
interface PostTasks {
	title: string,
	detail: string,
	status: number,
	category: number,
	createdby: string,
	charged: string,
	deadline?: Date
}
interface PostProfiles {
	id: string,
	name: string,
	intro?: string,
	icon?: number
}
// Put
interface PutTasks {
	id: number,
	title?: string,
	detail?: string,
	status?: number,
	category?: number,
	charged?: string,
	deadline?: Date
}
interface PutProfiles {
	id: string,
	name?: string,
	intro?: string,
	icon?: number
}
// Delete
interface DeleteTasks {
	id: number
}

// DBへの接続
interface DbSetting {
	connectionString: string;
	ssl: { rejectUnauthorized: boolean };
}
const DbSetting: DbSetting = {
	connectionString: process.env.DATABASE_URL || 'postgres://ltekopzxfbigxk:8a231cb186de5400a491174de781f37bc1d0373c111dcca1acd4d305fc8cc741@ec2-54-156-73-147.compute-1.amazonaws.com:5432/d8vf9g7eb00i29',
	ssl: { rejectUnauthorized: false }
};

class Postgres {
	private pool: any;
	private client: any;
	async init() {
		if(!this.pool) {
			this.pool = new Pool(DbSetting);
		}
		this.client = await this.pool.connect();
	}
	async query(query: string, params?: string[]) {
		let result = {
			rows: []
		};
		try {
			result = await this.client.query(query, params);
			return result.rows;
		}catch(err) {
			console.log(err);
			return err;
		}
	}
	async getTasks(type: string, payload?: GetTasks) {
		const query = queryCreator(type, payload);
		const params = (payload) ? Object.keys(payload).map(item => item) : [];
		return await this.query(query, params);
	}
	async getProfiles(type: string, payload?: GetProfiles) {
		const query = queryCreator(type, payload);
		const params = (payload) ? Object.keys(payload).map(item => item) : [];
		return await this.query(query, params);
	}
	async getIcons(type: string) {
		const query = queryCreator(type);
		return await this.query(query);
	}
	async postTasks(type: string, payload: PostTasks) {
		const query = queryCreator(type, payload);
		const params = Object.keys(payload).map(item => item);
		return await this.query(query, params);
	}
	async postProfiles(type: string, payload: PostTasks) {
		const query = queryCreator(type, payload);
		const params = Object.keys(payload).map(item => item);
		return await this.query(query, params);
	}
	async putTasks(type: string, payload: PutTasks) {
		const query = queryCreator(type, payload);
		const params = Object.keys(payload).map(item => item);
		return await this.query(query, params);
	}
	async putProfiles(type: string, payload: PutProfiles) {
		const query = queryCreator(type, payload);
		const params = Object.keys(payload).map(item => item);
		return await this.query(query, params);
	}
	async deleteTasks(type: string, payload: DeleteTasks) {
		const query = queryCreator(type, payload);
		const params = Object.keys(payload).map(item => item);
		return await this.query(query, params);
	}
}

module.exports.PostgresClass = Postgres;
