import React, { FC, useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../reducers/taskListSlice';
import TopComponent from '../components/Top';
import {Task} from '../interfaces/index';
import Axios from 'axios';

const TopContainer: FC = () => {
	const useGetTask = () => {
		interface useGetTask {
			loading: boolean;
			err: string;
			TaskList: Task[];
		}
		const [TaskList, setTaskList] = useState<Task[]>([]);
		const [loading, setLoading] = useState(false);
		const [err, setErr] = useState('');
		const dispatch = useDispatch();
		let tmpTaskArray: Task[] = [];

		const getTask = useCallback(async () => {
			setLoading(true);
			try {
				await Axios.get<Task[]>(
					'/api/tasks'
				).then((res) => {
					tmpTaskArray = [...tmpTaskArray, ...res.data];
					dispatch(add({taskList: tmpTaskArray}));
				}).catch(() => {
					throw new Error('Connection Error!');
				});
				setLoading(false);

				return tmpTaskArray;
			}catch(error) {
				setErr(error);
				setLoading(false);

				return tmpTaskArray;
			}
		}, []);

		useEffect(() => {
			(async () => {
				setTaskList(await getTask());
			})();
		}, []);

		const returnObj: useGetTask = {loading, err, TaskList};

		return returnObj;
	}

	const {loading, err, TaskList} = useGetTask();

	const fetchStatus: {
		loading: boolean;
		err: string;
	} = {loading, err};

	return <TopComponent fetchStatus={fetchStatus} TaskList={TaskList} />;
};

export default TopContainer;
