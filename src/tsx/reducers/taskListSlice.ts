import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, User } from '../interfaces/index';
import { RootState } from '../store';

interface TaskListInitial {
	taskList: Task[];
	userList: User[];
	fetchState: {
		loading: boolean;
		err: string;
	};
}
export interface PayloadActionAdd {
	taskList: Task[];
}
export interface PayloadActionAddUsers {
	userList: User[];
}
interface PayloadActionFetchState {
	status: 'start' | 'success' | 'err',
	err?: string
}

const initialState: TaskListInitial = {
	taskList: [],
	userList: [],
	fetchState: {
		loading: true,
		err: ''
	}
};

export const taskListSlice = createSlice({
	name: 'taskList',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<PayloadActionAdd>) => {
			state.taskList = [...state.taskList, ...action.payload.taskList];
		},
		addUser: (state, action: PayloadAction<PayloadActionAddUsers>) => {
			state.userList = [...state.userList, ...action.payload.userList];
		},
		setFetchState: (state, action: PayloadAction<PayloadActionFetchState>) => {
			if(action.payload.status === 'start') {
				state.fetchState = {
					loading: true,
					err: ''
				}
			}else if(action.payload.status === 'success') {
				state.fetchState = {
					loading: false,
					err: ''
				}
			}else if(action.payload.status === 'err' && action.payload.err) {
				state.fetchState = {
					loading: false,
					err: action.payload.err
				}
			}else {
				state.fetchState = {
					loading: false,
					err: ''
				}
			}
		}
	}
});

export const selectTaskList = (state: RootState): Task[] => state.taskList.taskList;
export const selectUserList = (state: RootState): User[] => state.taskList.userList;
export const selectFetchState = (state: RootState): {loading: boolean, err: string} => state.taskList.fetchState;
export const { add, addUser, setFetchState } = taskListSlice.actions;
export default taskListSlice.reducer;
