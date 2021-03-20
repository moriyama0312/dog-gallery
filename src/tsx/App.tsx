import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Top from './containers/Top';
import Tasks from './containers/Tasks';
import Make from './containers/Make';
import Header from './modules/molecules/Header';
import { useWrapperFetch } from './hooks/index';
import { selectFetchState, add, addUser } from './reducers/taskListSlice';
import Styles from '../sass/_inc/_App.scss';
import { Style, Task, User } from './interfaces/index';

const Style = Styles as Style;

const App: FC = () => {
	type dataType = Task | User;
	const dispatch = useDispatch();
	const fetchState = useSelector(selectFetchState);
	const apiList = [
		{ api: '/api/tasks' },
		{ api: '/api/profiles' }
	];
	const getData = useWrapperFetch<dataType>(apiList);
	useEffect(() => {
		const initStoreData = async () => {
			const data = await getData();
			dispatch(add({taskList: data[0] as Task[]}));
			dispatch(addUser({userList: data[1] as User[]}));
		};
		initStoreData();
	}, []);

	if(fetchState.loading) {
		return <p>loading...</p>;
	}

	return (
		<>
			<Header />
			<div className={Style.inner}>
				<Switch>
					<Route exact path="/">
						<Top />
					</Route>
					<Route path="/tasks/:id">
						<Tasks />
					</Route>
					<Route path="/make">
						<Make />
					</Route>
					<Redirect to="/" />
				</Switch>
			</div>
		</>
	);
};

export default App;
