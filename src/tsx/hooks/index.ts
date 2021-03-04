import { useState, useCallback, useEffect } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { add, setFetchState } from '../reducers/taskListSlice';
import { Task } from '../interfaces/index';
import Axios from 'axios';

interface useGetTask {
	loading: boolean;
	err: string;
	TaskList: Task[];
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useGetTask = (): useGetTask => {
	const [TaskList, setTaskList] = useState<Task[]>([]);
	const [loading, setLoading] = useState(false);
	const [err, setErr] = useState('');
	const dispatch = useDispatch();
	let tmpTaskArray: Task[] = [];

	const getTask = useCallback(async () => {
		setLoading(true);
		dispatch(setFetchState({status: 'start'}));
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
			dispatch(setFetchState({status: 'success'}));

			return tmpTaskArray;
		}catch(error) {
			setErr(error);
			setLoading(false);
			dispatch(setFetchState({status: 'err', err: error}));

			return tmpTaskArray;
		}
	}, []);

	useEffect(() => {
		(async () => {
			setTaskList(await getTask());
		})();
	}, [getTask]);

	const returnObj = {loading, err, TaskList};

	return returnObj;
};
