import React, { FC, FormEvent } from 'react';
import MakeComponent from '../components/Make';

const MakeContainer: FC = () => {
	const SubmitFunc = (e: FormEvent) => {
		console.log(e);
		e.preventDefault();
	};

	return <MakeComponent SubmitFunc={SubmitFunc} />
}

export default MakeContainer;
