import React, { FC, useState, useCallback, useEffect } from 'react';
import TopComponent from '../components/Top';
import {Task} from '../interfaces/index';
import Axios from 'axios';

const TopContainer: FC = () => {
	const useGetTask = () => {
		interface useGetTask {
			loading: boolean;
			err: string;
			getTask: () => Promise<Task[]>;
		}
		const [TaskList, setTaskList] = useState<Task[]>([]);
		const [loading, setLoading] = useState(false);
		const [err, setErr] = useState('');
		let tmpTaskArray: Task[] = [];

		const getTask = useCallback(async () => {
			setLoading(true);
			try {
				console.log('before');
				await Axios.get<Task[]>(
					'/api/tasks'
				).then((res) => {
					tmpTaskArray = [...tmpTaskArray, ...res.data];
					setTaskList(res.data);
				}).catch(() => {
					throw new Error('Connection Error!');
				});
				console.log('aaaaaa');
				console.log(TaskList);
				console.log(tmpTaskArray);
				setLoading(false);

				return tmpTaskArray;
			}catch(error) {
				setErr(error);
				setLoading(false);

				return tmpTaskArray;
			}
		}, []);

		const returnObj: useGetTask = {loading, err, getTask};

		return returnObj;
	}

	const {loading, err, getTask} = useGetTask();
	let TaskList: Task[] = [];

	useEffect(() => {
		(async () => {
			TaskList = [...TaskList,...(await getTask())];
			console.log(TaskList);
			console.log('bbbbbbb');
		})();
	}, []);

	const fetchStatus: {
		loading: boolean;
		err: string;
	} = {loading, err};

	return <TopComponent fetchStatus={fetchStatus} TaskList={TaskList} />;
};

export default TopContainer;
