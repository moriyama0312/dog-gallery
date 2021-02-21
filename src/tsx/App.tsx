import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Top from './containers/Top';
import Tasks from './containers/Tasks';
import Make from './containers/Make';
import Header from './modules/molecules/Header';
import Styles from '../sass/_inc/_App.scss';
import { Style } from './interfaces/index';

const Style = Styles as Style;

const App: FC = () => (
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

export default App;
