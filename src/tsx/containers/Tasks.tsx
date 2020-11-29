import React, { FC } from 'react';
import TasksComponent, { Task } from '../components/Tasks';

const TasksContainer: FC = () => {
	const Task: Task = {
		id: 1,
		title: 'Test Task',
		detail: 'Test用のタスクです',
		status: 'not-started',
		category: '趣味',
		created_day: Date.now()
	};

	return <TasksComponent Task={Task} />
}

export default TasksContainer;
