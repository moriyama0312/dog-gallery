import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../interfaces/index';
import { RootState } from '../store';

interface TaskListInitial {
	taskList: Task[];
	fetchState: {
		loading: boolean;
		err: string;
	};
}
interface PayloadActionAdd {
	taskList: Task[];
}
interface PayloadActionFetchState {
	status: 'start' | 'success' | 'err',
	err?: string
}

const initialState: TaskListInitial = {
	taskList: [],
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

export const selectTaskList = (state: RootState) => state.taskList.taskList;
export const selectFetchState = (state: RootState) => state.taskList.fetchState;
export const { add, setFetchState } = taskListSlice.actions;
export default taskListSlice.reducer;
