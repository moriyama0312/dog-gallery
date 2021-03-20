import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Task, Status } from '../interfaces/index';
import Styles from '../../sass/_inc/_components/_Top.scss';
import { Style } from '../interfaces/index';

const Style = Styles as Style;

interface TopProps {
	TaskList: Task[];
	fetchStatus: {
		loading: boolean;
		err: string;
	};
	deleteBtnClickHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => void;
}


const TopComponent: FC<TopProps> = ({TaskList, fetchStatus, deleteBtnClickHandler}) => {
	const StatusList: Status[] = [
		{
			index: 1,
			id: 'not-started',
			label: '未着手'
		},
		{
			index: 2,
			id: 'working',
			label: '作業中'
		},
		{
			index: 3,
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
						{TaskList.filter((task) => task.task_status === status.index).map((item) => (
							<Link key={item.task_id} to={`/tasks/${item.task_id}`} className={Style.task}>
								<h4 className={Style.task__title}>{item.task_title}</h4>
								<div className={Styles.task__btns}>
									<button
										className={Styles.task__btns__edit}
									>
										Edit
									</button>
									<button
										className={Styles.task__btns__delete}
										onClick={(e) => deleteBtnClickHandler(e, item.task_id)}
									>
										Delete
									</button>
								</div>
							</Link>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default TopComponent;
