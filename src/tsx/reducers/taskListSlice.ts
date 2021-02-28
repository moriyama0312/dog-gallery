import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../interfaces/index';
import { RootState } from '../store';

interface TaskListInitial {
	taskList: Task[];
}
interface PayloadActionAdd {
	taskList: Task[];
}

const initialState: TaskListInitial = {
	taskList: []
};

export const taskListSlice = createSlice({
	name: 'taskList',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<PayloadActionAdd>) => {
			state.taskList = [...state.taskList, ...action.payload.taskList];
		}
	}
});

export const selectTaskList = (state: RootState) => state.taskList.taskList;
export const { add } = taskListSlice.actions;
export default taskListSlice.reducer;
