import React from 'react';
import s from './style.module.css';
import { useDispatch } from 'react-redux';
/* import { todoAddAction } from '../../store/reducer/toDoReducer'; */
import { add } from '../../store/slice/todoSlice';


export default function ToDoAdd() {
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(add(event.target.title.value));
		event.target.reset();
	};
	return (
		<form onSubmit={onSubmit} className={s.form}>
			<input type='text' name='title' />
			<button>Добавить</button>
		</form>
	);
}
