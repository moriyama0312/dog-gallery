import React, { FC, FormEvent, ChangeEvent } from 'react';
import Styles from '../../sass/_inc/_components/_Make.scss';
import { Style, User } from '../interfaces/index';

const Style = Styles as Style;

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

interface MakeProps {
	submitHandler: (e: FormEvent<HTMLFormElement>) => void;
	changeHandler: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
	userList: User[];
	formValue: FormValue;
}

const MakeComponent: FC<MakeProps> = ({ submitHandler, changeHandler, userList, formValue = initialFormValue }) => {
	let year = '';
	let month = '';
	let day = '';
	if(formValue.task_deadline) {
		const date = new Date(formValue.task_deadline);
		year = date.getFullYear().toString();
		month = ((date.getMonth() + 1) >= 10) ? (date.getMonth() + 1).toString() : `0${date.getMonth() + 1}`;
		day = (date.getDate() >= 10) ? (date.getDate()).toString() : `0${date.getDate()}`;
	}

	return (
		<div className={Style.container}>
			<div className={Style.form}>
				<form
					onSubmit={submitHandler}
				>
					<div className={Style.form__block}>
						<h3 className={Style.form__block__title}>タスクのタイトル</h3>
						<input
							name="task_title"
							placeholder="タスクタイトルを入力してください"
							value={formValue.task_title}
							onChange={changeHandler}
						></input>
					</div>
					<div className={Style.form__block}>
						<h3 className={Style.form__block__title}>タスクの詳細</h3>
						<textarea
							name="task_detail"
							placeholder="タスクの詳細を入力してください"
							value={formValue.task_detail}
							onChange={changeHandler}
						></textarea>
					</div>
					<div className={Style.form__block}>
						<h3 className={Style.form__block__title}>タスクのカテゴリー</h3>
						<ul className={Style.checkbox__list}>
							<li><input id="checkbox__cat__item01" type="radio" checked={(formValue.task_category === 1) ? true : false} data-type="number" value="1" name="task_category" onChange={changeHandler}></input><label htmlFor="checkbox__cat__item01">趣味</label></li>
							<li><input id="checkbox__cat__item02" type="radio" checked={(formValue.task_category === 2) ? true : false} data-type="number" value="2" name="task_category" onChange={changeHandler}></input><label htmlFor="checkbox__cat__item02">仕事</label></li>
							<li><input id="checkbox__cat__item03" type="radio" checked={(formValue.task_category === 3) ? true : false} data-type="number" value="3" name="task_category" onChange={changeHandler}></input><label htmlFor="checkbox__cat__item03">勉強</label></li>
							<li><input id="checkbox__cat__item04" type="radio" checked={(formValue.task_category === 4) ? true : false} data-type="number" value="4" name="task_category" onChange={changeHandler}></input><label htmlFor="checkbox__cat__item04">交際</label></li>
						</ul>
					</div>
					<div className={Style.form__block}>
						<h3 className={Style.form__block__title}>タスクの締め切り</h3>
						<ul className={Style.deadline__list}>
							<li>
								<input type="number" name="deadline_year" value={(formValue.task_deadline) ? year : ''} placeholder="2021" onChange={changeHandler}></input>
								年
							</li>
							<li>
								<input type="number" name="deadline_month" value={(formValue.task_deadline) ? month : ''} placeholder="01" onChange={changeHandler}></input>
								月
							</li>
							<li>
								<input type="number" name="deadline_day" value={(formValue.task_deadline) ? day : ''} placeholder="01" onChange={changeHandler}></input>
								日
							</li>
						</ul>
					</div>
					<div className={Style.form__block}>
						<h3 className={Style.form__block__title}>タスクの担当者</h3>
						<select className={Style.select__list} name="task_charged" value={formValue.task_charged} onChange={changeHandler}>
							<option value="">選択してください</option>
							{userList.map((user) => (
								<option key={user.profile_id} value={user.profile_id}>{user.profile_name}</option>
							))}
						</select>
					</div>
					<div className={Style.form__submit}>
						<button type="submit" className={Style.form__submit__btn}>
							登録する
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default MakeComponent;
