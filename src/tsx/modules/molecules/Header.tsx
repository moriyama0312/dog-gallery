import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Styles from '../../../sass/_inc/_modules/_molecules/_Header.scss';

const Header: FC = () => (
	<header className={Styles.header}>
		<div className={Styles.inner}>
			<div className="left_block">
				<Link to={'/'}>TOP</Link>
			</div>
			<div className="right_block"></div>
		</div>
	</header>
);

export default Header;
