import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import TopComponent from '../components/Top';
// import { useGetTask } from '../hooks/index';
import { selectTaskList, selectFetchState } from '../reducers/taskListSlice';

const TopContainer: FC = () => {
	// const {loading, err, TaskList} = useGetTask();
	const TaskList = useSelector(selectTaskList);
	const { loading, err } = useSelector(selectFetchState);

	const fetchStatus = { loading, err };

	return <TopComponent fetchStatus={fetchStatus} TaskList={TaskList} />;
};

export default TopContainer;
