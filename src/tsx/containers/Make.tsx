import React, { FC, FormEvent, ChangeEvent, useState } from 'react';
import MakeComponent from '../components/Make';

const MakeContainer: FC = () => {
	interface FormValue {
		task_title: string;
		task_detail: string;
		task_category: number;
		task_createdby: string;
		task_status: number;
		task_deadline?: Date;
	}
	const initialFormValue: FormValue = {
		task_title: '',
		task_detail: '',
		task_category: 0,
		task_createdby: '',
		task_status: 1
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

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(e.target);
		console.log(formValue);
	};
	const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
			newFormValue = {...formValue,...{[key]: value}};
			setFormValue(newFormValue);
		}
	}

	return <MakeComponent submitHandler={submitHandler} changeHandler={changeHandler} />
}

export default MakeContainer;
