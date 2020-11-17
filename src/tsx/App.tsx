import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Top from './containers/Top';

const App: FC<{}> = () => (
	<div className="inner">
		<Switch>
			<Route path="/" component={Top} />
		</Switch>
	</div>
);

export default App;
