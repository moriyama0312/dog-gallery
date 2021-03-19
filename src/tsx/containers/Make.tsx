import React, { FC, FormEvent, ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectUserList, add } from '../reducers/taskListSlice';
import { useWrapperPost, useWrapperFetch } from '../hooks/index';
import MakeComponent from '../components/Make';
import { Task } from '../interfaces';

const MakeContainer: FC = () => {
	interface FormValue {
		task_title: string;
		task_detail: string;
		task_category: number;
		task_createdby: string;
		task_status: number;
		task_charged: string;
		task_deadline?: Date;
	}
	const initialFormValue: FormValue = {
		task_title: '',
		task_detail: '',
		task_status: 1,
		task_category: 0,
		task_charged: '',
		task_createdby: 'mory',
	}
	interface Deadline {
		[key: string]: string;
	}
	const initialDeadline: Deadline = {
		deadline_year: '2021',
		deadline_month: '01',
		deadline_day: '01'
	};
	const [formValue, setFormValue] = useState(initialFormValue);
	const [deadline, setDeadline] = useState(initialDeadline);
	const userList = useSelector(selectUserList);
	const postData = useWrapperPost<FormValue>();
	const getData = useWrapperFetch<Task>([{api: '/api/tasks'}]);
	const dispatch = useDispatch();
	const history = useHistory();

	const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
		const postContents = {
			api: '/api/tasks',
			data: formValue
		};

		e.preventDefault();

		await postData(postContents);
		const data = await getData();
		console.log(data);
		dispatch(add({taskList: data[0] as Task[]}));

		history.push('/');

		// Postしてreturnを追加する
		// dispatch(add({taskList: [formValue]}));
	};
	const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const dataType = e.target.getAttribute('data-type');
		const key = e.target.name;
		const value = e.target.value;
		let newFormValue: FormValue;
		if(key.indexOf('deadline') >= 0) {
			const newDeadline = {...deadline, ...{[key]: value}};
			let newDeadlineString = '';
			setDeadline(newDeadline);
			(Object.keys(newDeadline) as (keyof Deadline)[]).forEach((key) => {
				if(key === 'deadline_day') {
					newDeadlineString += newDeadline[key];
				}else {
					newDeadlineString += newDeadline[key] + '-';
				}
			});
			newFormValue = {...formValue,...{task_deadline: new Date(newDeadlineString)}};
			setFormValue(newFormValue);
		}else {
			newFormValue = (dataType && dataType === 'number') ? {...formValue,...{[key]: Number(value)}} : {...formValue,...{[key]: value}};
			setFormValue(newFormValue);
		}
	}

	return <MakeComponent submitHandler={submitHandler} changeHandler={changeHandler} userList={userList} />
}

export default MakeContainer;
