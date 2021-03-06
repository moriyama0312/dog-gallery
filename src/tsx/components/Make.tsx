import React, { FC, FormEvent, ChangeEvent } from 'react';
import Styles from '../../sass/_inc/_components/_Make.scss';
import { Style } from '../interfaces/index';

const Style = Styles as Style;

interface MakeProps {
	submitHandler: (e: FormEvent<HTMLFormElement>) => void;
	changeHandler: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const MakeComponent: FC<MakeProps> = ({ submitHandler, changeHandler }) => {
	return (
		<div className={Style.container}>
			<div className={Style.form}>
				<form
					onSubmit={submitHandler}
				>
					<div className={Style.form__block}>
						<h3 className={Style.form__block__title}>タスクのタイトル</h3>
						<input name="task_title" placeholder="タスクタイトルを入力してください" onChange={changeHandler}></input>
					</div>
					<div className={Style.form__block}>
						<h3 className={Style.form__block__title}>タスクの詳細</h3>
						<textarea name="task_detail" placeholder="タスクの詳細を入力してください" onChange={changeHandler}></textarea>
					</div>
					<div className={Style.form__block}>
						<h3 className={Style.form__block__title}>タスクのカテゴリー</h3>
						<ul className={Style.checkbox__list}>
							<li><input id="checkbox__cat__item01" type="radio" value="1" name="cat_item" onChange={changeHandler}></input><label htmlFor="checkbox__cat__item01">趣味</label></li>
							<li><input id="checkbox__cat__item02" type="radio" value="2" name="cat_item" onChange={changeHandler}></input><label htmlFor="checkbox__cat__item02">仕事</label></li>
							<li><input id="checkbox__cat__item02" type="radio" value="3" name="cat_item" onChange={changeHandler}></input><label htmlFor="checkbox__cat__item03">勉強</label></li>
							<li><input id="checkbox__cat__item02" type="radio" value="4" name="cat_item" onChange={changeHandler}></input><label htmlFor="checkbox__cat__item04">交際</label></li>
						</ul>
					</div>
					<div className={Style.form__block}>
						<h3 className={Style.form__block__title}>タスクの締め切り</h3>
						<ul className={Style.deadline__list}>
							<li>
								<input type="number" name="deadline_year" placeholder="2021" onChange={changeHandler}></input>
								年
							</li>
							<li>
								<input type="number" name="deadline_month" placeholder="01" onChange={changeHandler}></input>
								月
							</li>
							<li>
								<input type="number" name="deadline_day" placeholder="01" onChange={changeHandler}></input>
								日
							</li>
						</ul>
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
