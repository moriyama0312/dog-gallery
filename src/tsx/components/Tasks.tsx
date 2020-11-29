import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Styles from '../../sass/_inc/_components/_Tasks.scss';

interface Status {
	id: string;
	label: string;
}
export interface Task {
	id: number;
	title: string;
	detail: string;
	status: 'not-started' | 'working' | 'complete';
	category: string;
	created_day: number;
	deadline?: Date;
}

type TasksProps = {Task: Task} & RouteComponentProps<{ id: string }>;

const TasksComponent: FC<TasksProps> = ({ Task, match }) => {
	const id = match.params.id;
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
	const TimestampToDate = ():string => {
		const TIMESTAMP = Task.created_day;
		const DateObj = new Date(TIMESTAMP);
		const {y, m, d} = {y: DateObj.getFullYear(), m: DateObj.getMonth()+1, d: DateObj.getDate()};

		return `${y}年${m}月${d}日`;
	};

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
				<p className={Styles.task__text}>{TimestampToDate()}</p>
			</div>
		</div>
	);
};

export default withRouter(TasksComponent);
