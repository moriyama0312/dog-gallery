import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Top from './containers/Top';
import Tasks from './components/Tasks';
import Header from './modules/molecules/Header';
import Styles from '../sass/_inc/_App.scss';


const App: FC = () => (
	<>
		<Header />
		<div className={Styles.inner}>
			<Switch>
				<Route exact path="/" component={Top} />
				<Route path="/tasks/:id" component={Tasks} />
				<Redirect to="/" />
			</Switch>
		</div>
	</>
);

export default App;
