import React, { FC, useState, useCallback, useEffect } from 'react';
import TopComponent from '../components/Top';
import Axios from 'axios';

const TopContainer: FC = () => {
	const useGetTask = () => {
		interface useGetTask {
			loading: boolean;
			err: string;
			getTask: () => Promise<void>;
		}
		const [loading, setLoading] = useState(false);
		const [err, setErr] = useState('');

		const getTask = useCallback(async () => {
			setLoading(true);
			try {
				let taskList;
				await Axios.get(
					'/api/tasks'
				).then((res) => {
					taskList = res;
				}).catch(() => {
					throw new Error('Connection Error!');
				});
				console.log(taskList);
				setLoading(false);
			}catch(error) {
				setErr(error);
				setLoading(false);
			}
		}, []);

		const returnObj: useGetTask = {loading, err, getTask};

		return returnObj;
	}

	const {loading, err, getTask} = useGetTask();

	useEffect(() => {
		getTask();
	}, []);

	const TaskList = [
		{
			id: 1,
			title: 'Test Task',
			detail: 'Test用のタスクです',
			status: 'not-started' as const,
		},
		{
			id: 2,
			title: 'Test Task2',
			detail: 'Test用のタスク2です',
			status: 'working' as const,
		}
	];

	const fetchStatus: {
		loading: boolean;
		err: string;
	} = {loading, err};

	return <TopComponent fetchStatus={fetchStatus} TaskList={TaskList} />;
};

export default TopContainer;
