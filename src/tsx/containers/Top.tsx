import React, { FC } from 'react';
import TopComponent, {Task} from '../components/Top';

const TopContainer: FC = () => {
	const TaskList: Task[] = [
		{
			id: 1,
			title: 'Test Task',
			detail: 'Test用のタスクです',
			status: 'not-started',
		},
		{
			id: 2,
			title: 'Test Task2',
			detail: 'Test用のタスク2です',
			status: 'working',
		}
	];

	console.log('hoge');

	return <TopComponent TaskList={TaskList} />;
};

export default TopContainer;
