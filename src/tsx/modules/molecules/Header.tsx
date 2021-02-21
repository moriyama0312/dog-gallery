import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Styles from '../../../sass/_inc/_modules/_molecules/_Header.scss';
import { Style } from '../../interfaces/index';

const Style = Styles as Style;

const Header: FC = () => (
	<header className={Style.header}>
		<div className={Style.inner}>
			<div className="left_block">
				<Link to={'/'}>TOP</Link>
			</div>
			<div className="right_block"></div>
		</div>
	</header>
);

export default Header;
