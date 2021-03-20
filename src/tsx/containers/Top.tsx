import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TopComponent from '../components/Top';
import { useWrapperDelete } from '../hooks/index';
import { selectTaskList, selectFetchState, deletePost } from '../reducers/taskListSlice';
import { useHistory } from 'react-router';

const TopContainer: FC = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const TaskList = useSelector(selectTaskList);
	const { loading, err } = useSelector(selectFetchState);
	const deletePostFetch = useWrapperDelete();

	const fetchStatus = { loading, err };

	const deleteBtnClickHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
		e.preventDefault();
		await deletePostFetch(id);
		dispatch(deletePost({ id }));
	};

	const editBtnClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
		e.preventDefault();
		history.push(`/make?edit=${id}`);
	};

	const btnClickHandler = {
		deleteBtnClickHandler,
		editBtnClickHandler
	};

	return <TopComponent fetchStatus={fetchStatus} TaskList={TaskList} btnClickHandler={btnClickHandler} />;
};

export default TopContainer;
