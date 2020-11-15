import React, { FC } from 'react';
import Styles from '../../sass/_inc/_components/_App.scss';

interface AppProps {
	timeLeft: number;
	reset: () => void;
}

const AppComponent: FC<AppProps> = ({ timeLeft, reset }) => (
	<div className={Styles.container}>
		<header className={Styles.header}>
			<h1>タイマー</h1>
		</header>
		<div className={Styles.contents}>
			<div className={Styles.number}>
				{timeLeft}
			</div>
			<div className={Styles.btn} onClick={reset}>
				Reset
			</div>
		</div>
	</div>
);

export default AppComponent;
