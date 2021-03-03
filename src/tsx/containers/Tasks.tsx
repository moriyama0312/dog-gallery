import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectTaskList } from '../reducers/taskListSlice'
import TasksComponent from '../components/Tasks';

const TasksContainer: FC = () => {
	const { id } = useParams<{id: string}>();
	const Task = useSelector(selectTaskList).filter((task) => task.task_id === Number(id))[0];
	console.log(Task);

	return <TasksComponent Task={Task} id={id} />;
};

export default TasksContainer;
