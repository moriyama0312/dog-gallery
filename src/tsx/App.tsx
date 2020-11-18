import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Top from './containers/Top';
import Header from './modules/molecules/Header';

const App: FC<{}> = () => (
	<>
		<Header />
		<div className="inner">
			<Switch>
				<Route path="/" component={Top} />
			</Switch>
		</div>
	</>
);

export default App;
