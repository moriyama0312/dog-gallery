import React, { FC, FormEvent } from 'react';
import Styles from '../../sass/_inc/_components/_Make.scss';

interface MakeProps {
	SubmitFunc: (e: FormEvent) => void;
}

const MakeComponent: FC<MakeProps> = ({ SubmitFunc }) => {
	return (
		<div className={Styles.container}>
			<div className={Styles.form}>
				<form
					onSubmit={SubmitFunc}
				>
					<div className={Styles.form__block}>
						<h3 className={Styles.form__block__title}>タスクのタイトル</h3>
						<input placeholder="タスクタイトルを入力してください"></input>
					</div>
					<div className={Styles.form__block}>
						<h3 className={Styles.form__block__title}>タスクの詳細</h3>
						<textarea placeholder="タスクの詳細を入力してください"></textarea>
					</div>
					<div className={Styles.form__block}>
						<h3 className={Styles.form__block__title}>タスクのカテゴリー</h3>
						<ul className={Styles.checkbox__list}>
							<li><input id="checkbox__cat__item01" type="checkbox" name="cat_item01"></input><label htmlFor="checkbox__cat__item01">趣味</label></li>
							<li><input id="checkbox__cat__item02" type="checkbox" name="cat_item02"></input><label htmlFor="checkbox__cat__item02">勉強</label></li>
							<li><input id="checkbox__cat__item02" type="checkbox" name="cat_item03"></input><label htmlFor="checkbox__cat__item03">仕事</label></li>
							<li><input id="checkbox__cat__item02" type="checkbox" name="cat_item04"></input><label htmlFor="checkbox__cat__item04">交際</label></li>
						</ul>
					</div>
					<div className={Styles.form__block}>
						<h3 className={Styles.form__block__title}>タスクの締め切り</h3>
						<ul className={Styles.deadline__list}>
							<li>
								<input type="number" name="deadline_year" placeholder="2020"></input>
								年
							</li>
							<li>
								<input type="number" name="deadline_month" placeholder="11"></input>
								月
							</li>
							<li>
								<input type="number" name="deadline_day" placeholder="30"></input>
								日
							</li>
						</ul>
					</div>
					<div className={Styles.form__submit}>
						<button type="submit" className={Styles.form__submit__btn}>
							登録する
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default MakeComponent;
