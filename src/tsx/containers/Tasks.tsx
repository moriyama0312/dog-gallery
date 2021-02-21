import React, { FC } from 'react';
import TasksComponent from '../components/Tasks';

const TasksContainer: FC = () => {
	const Task = {
		id: 1,
		title: 'Test Task',
		detail: 'Test用のタスクです',
		status: 'not-started' as const,
		category: '趣味',
		created_day: Date.now()
	};

	return <TasksComponent Task={Task} />;
};

export default TasksContainer;
