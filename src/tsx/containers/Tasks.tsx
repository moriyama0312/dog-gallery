import React, { FC } from 'react';
import TasksComponent from '../components/Tasks';

const TasksContainer: FC = () => {
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
