import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TopComponent from '../components/Top';
import { useWrapperDelete } from '../hooks/index';
import { selectTaskList, selectFetchState, deletePost } from '../reducers/taskListSlice';

const TopContainer: FC = () => {
	// const {loading, err, TaskList} = useGetTask();
	const dispatch = useDispatch();
	const TaskList = useSelector(selectTaskList);
	const { loading, err } = useSelector(selectFetchState);
	const deletePostFetch = useWrapperDelete();

	const fetchStatus = { loading, err };

	const deleteBtnClickHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
		console.log(id);
		e.preventDefault();
		await deletePostFetch(id);
		dispatch(deletePost({ id }));
	};

	return <TopComponent fetchStatus={fetchStatus} TaskList={TaskList} deleteBtnClickHandler={deleteBtnClickHandler} />;
};

export default TopContainer;
