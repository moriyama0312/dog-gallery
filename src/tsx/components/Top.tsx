import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Styles from '../../sass/_inc/_components/_Top.scss';

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
type TopProps = Task[]


const TopComponent: FC<TopProps> = ({...TaskList}) => {
	console.log(TaskList);
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
		<div className={Styles.container}>
			{StatusList.map((status) => (
				<div key={status.id} className={Styles.block}>
					<h3 className={Styles.block__title}>{status.label}</h3>
					<div className={Styles.block__tasks}>
						{TaskList.filter((task) => task.status === status.id).map((item) => (
							<Link key={item.id} to={`/tasks/${item.id}`} className={Styles.task}>
								<h4 className={Styles.task__title}>{item.title}</h4>
							</Link>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default TopComponent;
