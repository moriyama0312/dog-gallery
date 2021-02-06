// const { Pool } = require('pg');
// const { queryCreator } = require('./query.ts');
import { Pool } from 'pg';
import queryCreator from './query';
import * as interfaces from '../include/interface';

console.log(interfaces);

// Payload関連
// Get
// interface GetTasks {
// 	id?: number,
// 	user?: string,
// 	status?: number,
// 	range?: number
// }
// interface GetProfiles {
// 	user?: string
// }
// // Post
// interface PostTasks {
// 	title: string,
// 	detail: string,
// 	status: number,
// 	category: number,
// 	createdby: string,
// 	charged: string,
// 	deadline?: Date
// }
// // interface PostProfiles {
// // 	id: string,
// // 	name: string,
// // 	intro?: string,
// // 	icon?: number
// // }
// // Put
// interface PutTasks {
// 	id: number,
// 	title?: string,
// 	detail?: string,
// 	status?: number,
// 	category?: number,
// 	charged?: string,
// 	deadline?: Date
// }
// interface PutProfiles {
// 	id: string,
// 	name?: string,
// 	intro?: string,
// 	icon?: number
// }
// // Delete
// interface DeleteTasks {
// 	id: number
// }

// // DBへの接続
// interface DbSetting {
// 	connectionString: string;
// 	ssl: { rejectUnauthorized: boolean };
// }
const DbSetting: interfaces.DbSetting = {
	connectionString: process.env.DATABASE_URL || 'postgres://ltekopzxfbigxk:8a231cb186de5400a491174de781f37bc1d0373c111dcca1acd4d305fc8cc741@ec2-54-156-73-147.compute-1.amazonaws.com:5432/d8vf9g7eb00i29',
	ssl: { rejectUnauthorized: false }
};

class Postgres {
	private pool: any;
	private client: any;
	private isConnected: boolean;
	async init() {
		if(!this.pool) {
			this.pool = new Pool(DbSetting);
		}
		try {
			this.client = await this.pool.connect();
			this.isConnected = true;
		}catch(err) {
			console.log(err);
			this.isConnected = false;
		}
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
	async getTasks(type: string, payload?: interfaces.GetTasks) {
		const query = queryCreator(type, payload);
		const params = (payload) ? Object.keys(payload).map(item => item) : [];
		return await this.query(query, params);
	}
	async getProfiles(type: string, payload?: interfaces.GetProfiles) {
		const query = queryCreator(type, payload);
		const params = (payload) ? Object.keys(payload).map(item => item) : [];
		return await this.query(query, params);
	}
	async getIcons(type: string) {
		const query = queryCreator(type);
		return await this.query(query);
	}
	async postTasks(type: string, payload: interfaces.PostTasks) {
		const query = queryCreator(type, payload);
		const params = Object.keys(payload).map(item => item);
		return await this.query(query, params);
	}
	async postProfiles(type: string, payload: interfaces.PostTasks) {
		const query = queryCreator(type, payload);
		const params = Object.keys(payload).map(item => item);
		return await this.query(query, params);
	}
	async putTasks(type: string, payload: interfaces.PutTasks) {
		const query = queryCreator(type, payload);
		const params = Object.keys(payload).map(item => item);
		return await this.query(query, params);
	}
	async putProfiles(type: string, payload: interfaces.PutProfiles) {
		const query = queryCreator(type, payload);
		const params = Object.keys(payload).map(item => item);
		return await this.query(query, params);
	}
	async deleteTasks(type: string, payload: interfaces.DeleteTasks) {
		const query = queryCreator(type, payload);
		const params = Object.keys(payload).map(item => item);
		return await this.query(query, params);
	}
	get connectedStatus() {
		return this.isConnected;
	}
}

module.exports.PostgresClass = Postgres;
