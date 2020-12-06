import React, { FC, FormEvent } from 'react';
import MakeComponent from '../components/Make';

const MakeContainer: FC = () => {
	const SubmitFunc = (e: FormEvent) => {
		e.preventDefault();
		console.log('hoge');
		console.log(e);
	};

	return <MakeComponent SubmitFunc={SubmitFunc} />
}

export default MakeContainer;
