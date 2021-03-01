import React, { FC } from 'react';
import {Task, Status} from '../interfaces/index';
import Styles from '../../sass/_inc/_components/_Tasks.scss';
import { Style } from '../interfaces/index';

const Style = Styles as Style;

// type TasksProps = {Task: Task} & {id: string};
type TasksProps = {
	Task: Task;
	id: string;
};

const TasksComponent: FC<TasksProps> = ({ Task, id }) => {
	// const id = match.params.id;
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
	const TimestampToDate = ():string => {
		const TIMESTAMP = Task.task_created;
		const DateObj = new Date(TIMESTAMP);
		const {y, m, d} = {y: DateObj.getFullYear(), m: DateObj.getMonth()+1, d: DateObj.getDate()};

		return `${y}年${m}月${d}日`;
	};

	return (
		<div className={Style.container}>
			<div className={Style.task}>
				<h3 className={Style.task__title}>タスク名</h3>
				<p className={Style.task__text}>{Task.task_title}(id: { id })</p>
				<h3 className={Style.task__title}>タスクの詳細</h3>
				<p className={Style.task__text}>{Task.task_detail}</p>
				<h3 className={Style.task__title}>ステータス</h3>
				<p className={Style.task__text}>{StatusList.filter((status) => status.index === Task.task_status)[0].label}</p>
				<h3 className={Style.task__title}>カテゴリー</h3>
				<p className={Style.task__text}>{Task.task_category}</p>
				<h3 className={Style.task__title}>タスクの作成日</h3>
				<p className={Style.task__text}>{TimestampToDate()}</p>
			</div>
		</div>
	);
};

export default TasksComponent;
