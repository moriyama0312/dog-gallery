import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectTaskList, selectFetchState } from '../reducers/taskListSlice';
import TasksComponent from '../components/Tasks';

const TasksContainer: FC = () => {
	const { id } = useParams<{id: string}>();
	const { loading, err } = useSelector(selectFetchState);
	const Task = useSelector(selectTaskList).filter((task) => task.task_id === Number(id))[0];
	console.log(loading);

	if(loading) {
		return <p>loading...</p>;
	}else if(err) {
		return <p>Connection Err!</p>;
	}

	console.log(Task);

	return <TasksComponent Task={Task} id={id} />;
};

export default TasksContainer;
