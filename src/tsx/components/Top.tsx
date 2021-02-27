import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {Task} from '../interfaces/index';
import Styles from '../../sass/_inc/_components/_Top.scss';
import { Style } from '../interfaces/index';

const Style = Styles as Style;

interface Status {
	id: string;
	label: string;
}
interface TopProps {
	TaskList: Task[];
	fetchStatus: {
		loading: boolean;
		err: string;
	};
}


const TopComponent: FC<TopProps> = ({TaskList, fetchStatus}) => {
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

	if(fetchStatus.loading) {
		return <p>loading...</p>;
	}else if(fetchStatus.err) {
		return <p>Connection Err!</p>;
	}
	console.log(TaskList);

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
