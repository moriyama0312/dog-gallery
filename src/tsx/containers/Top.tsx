import React, { FC, useState, useCallback, useEffect } from 'react';
import TopComponent from '../components/Top';
import Axios from 'axios';

const TopContainer: FC = () => {
	const useGetTask = () => {
		const [loading, setLoading] = useState(false);
		const [err, setErr] = useState('');

		const getTask = useCallback(async () => {
			setLoading(true);
			try {
				const taskList = await Axios.get('/api/tasks');
				console.log(taskList);
				setLoading(false);
			}catch(error) {
				setErr(error.message);
				setLoading(false);
			}
		}, []);

		return [loading, err, getTask];
	}

	const [loading, err, getTask] = useGetTask();

	useEffect(() => {
		getTask();
	});

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

	return <TopComponent TaskList={TaskList} />;
};

export default TopContainer;
