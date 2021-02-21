import React, { FC } from 'react';
import TopComponent from '../components/Top';

const TopContainer: FC = () => {
	const TaskList = [
		{
			id: 1,
			title: 'Test Task',
			detail: 'Test用のタスクです',
			status: 'not-started' as const,
		},
		{
			id: 2,
			title: 'Test Task2',
			detail: 'Test用のタスク2です',
			status: 'working' as const,
		}
	];

	return <TopComponent TaskList={TaskList} />;
};

export default TopContainer;
