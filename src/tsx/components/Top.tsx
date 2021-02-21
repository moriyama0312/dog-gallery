import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Styles from '../../sass/_inc/_components/_Top.scss';
import { Style } from '../interfaces/index';

const Style = Styles as Style;

interface Status {
	id: string;
	label: string;
}
export interface Task {
	id: number;
	title: string;
	detail: string;
	status: 'not-started' | 'working' | 'complete';
	deadline?: Date;
}
interface TopProps {
	TaskList: Task[];
}


const TopComponent: FC<TopProps> = ({TaskList}) => {
	const StatusList: Status[] = [
		{
			id: 'not-started',
			label: '未着手'
		},
		{
			id: 'working',
			label: '作業中'
		},
		{
			id: 'complete',
			label: '完了'
		}
	];

	return (
		<div className={Style.container}>
			{StatusList.map((status) => (
				<div key={status.id} className={Style.block}>
					<h3 className={Style.block__title}>{status.label}</h3>
					<div className={Style.block__tasks}>
						{TaskList.filter((task) => task.status === status.id).map((item) => (
							<Link key={item.id} to={`/tasks/${item.id}`} className={Style.task}>
								<h4 className={Style.task__title}>{item.title}</h4>
							</Link>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default TopComponent;
