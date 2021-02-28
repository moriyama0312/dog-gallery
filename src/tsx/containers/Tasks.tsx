import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectTaskList } from '../reducers/taskListSlice'
import TasksComponent from '../components/Tasks';

const TasksContainer: FC = () => {
	const taskList = useSelector(selectTaskList);
	console.log(taskList);
	const Task = {
		task_id: 1,
		task_title: 'Test Task',
		task_detail: 'Test用のタスクです',
		task_status: 1,
		task_category: 1,
		task_charged: "mory",
		task_created: Date.now(),
		task_createdby: "mory"
	};

	return <TasksComponent Task={Task} />;
};

export default TasksContainer;
