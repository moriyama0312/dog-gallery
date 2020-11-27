import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Styles from '../../sass/_inc/_components/_Tasks.scss';

interface Status {
	id: string;
	label: string;
}
interface Task {
	id: number;
	title: string;
	detail: string;
	status: 'not-started' | 'working' | 'complete';
	category: string;
	created_day: number;
	deadline?: Date;
}
type TasksProps = {} & RouteComponentProps<{ id: string }>;

const TasksComponent: FC<TasksProps> = ({ match }) => {
	const id = match.params.id;
	const Task: Task = {
		id: 1,
		title: 'Test Task',
		detail: 'Test用のタスクです',
		status: 'not-started',
		category: '趣味',
		created_day: Date.now()
	};
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
			<div className={Styles.task}>
				<h3 className={Styles.task__title}>タスク名</h3>
				<p className={Styles.task__text}>{Task.title}(id: {id})</p>
				<h3 className={Styles.task__title}>タスクの詳細</h3>
				<p className={Styles.task__text}>{Task.detail}</p>
				<h3 className={Styles.task__title}>ステータス</h3>
				<p className={Styles.task__text}>{StatusList.filter((status) => status.id === Task.status)[0].label}</p>
				<h3 className={Styles.task__title}>カテゴリー</h3>
				<p className={Styles.task__text}>{Task.category}</p>
				<h3 className={Styles.task__title}>タスクの作成日</h3>
				{/* <p className={Styles.task__text}>{new Date(Task.created_day)}</p> */}
			</div>
		</div>
	);
};

export default withRouter(TasksComponent);
