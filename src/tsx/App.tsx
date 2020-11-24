import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Top from './containers/Top';
import Header from './modules/molecules/Header';
import Styles from '../sass/_inc/_App.scss';

const App: FC = () => (
	<>
		<Header />
		<div className={Styles.inner}>
			<Switch>
				<Route path="/" component={Top} />
				<Redirect to="/" />
			</Switch>
		</div>
	</>
);

export default App;
