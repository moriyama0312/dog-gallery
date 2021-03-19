import { useState, useCallback, useEffect } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { add, addUser, setFetchState } from '../reducers/taskListSlice';
import { Task, User } from '../interfaces/index';
import Axios from 'axios';

interface useGetTask {
	loading: boolean;
	err: string;
	TaskList: Task[];
}
// interface FormData {
// 	task_title: string;
// 	task_detail: string;
// 	task_category: number;
// 	task_createdby: string;
// 	task_status: number;
// 	task_deadline?: Date;
// }
interface FetchApi {
	api: string;
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useWrapperFetch = <T>(apiList: FetchApi[]) => {
	const [fetchData, setFetchData] = useState<Array<T[]>>([]);
	const dispatch = useDispatch();
	let tmpDataList: Array<T[]> = [];

	const getData = useCallback(async () => {
		dispatch(setFetchState({status: 'start'}));

		try {
			await Axios.all(
				apiList.map((api) => Axios.get<T[]>(api.api))
			).then(Axios.spread((...res) => {
				tmpDataList = [...fetchData, ...res.map((item) => item.data)];
				setFetchData(tmpDataList);
				dispatch(setFetchState({status: 'success'}));
			})).catch(() => {
				throw new Error('Get Data Error!');
			});
		}catch(error) {
			dispatch(setFetchState({status: 'err', err: error}));
			throw new Error('Get Data Error!');
		}

		return tmpDataList;
	}, []);

	return getData;
}

interface Post<T> {
	api: string;
	data: T;
}
export const useWrapperPost = <T>() => {
	const dispatch = useDispatch();

	const postData = useCallback(async (post: Post<T>) => {
		dispatch(setFetchState({status: 'start'}));

		try {
			await Axios.post<T[]>(
				post.api,
				post.data
			).then((res) => {
				console.log(res);
				dispatch(setFetchState({status: 'success'}));
			}).catch(() => {
				throw new Error('Post Data Error!');
			});
		}catch(error) {
			dispatch(setFetchState({status: 'err', err: error}));
		}

		return false;
	}, []);

	return postData;
}

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
				throw new Error('Connection Error for Tasks!');
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

export const useGetUsers = () => {
	const dispatch = useDispatch();
	let tmpUsersArray: User[] = [];

	const getUsers = useCallback(async () => {
		try {
			await Axios.get<User[]>(
				'/api/profiles'
			).then((res) => {
				tmpUsersArray = [...tmpUsersArray, ...res.data];
				dispatch(addUser({userList: tmpUsersArray}));
			}).catch(() => {
				throw new Error('Connection Error for Users!');
			});
		}catch(error) {
			throw new Error('Connection Error for Users!');
		}
	}, []);

	useEffect(() => {
		(async () => {
			await getUsers();
		})();
	}, [getUsers]);
}
