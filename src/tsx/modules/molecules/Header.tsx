import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC<{}> = () => (
	<header className="header">
		<div className="inner">
			<div className="left_block">
				<Link to={'/'} />
			</div>
			<div className="right_block"></div>
		</div>
	</header>
);

export default Header;
