import React from 'react';
import s from './style.module.css';
import { useDispatch } from 'react-redux';
/* import { todoChangeStatusAction, todoDeleteAction } from '../../store/reducer/toDoReducer'; */
import { remove, changeStatus } from '../../store/slice/todoSlice';

export default function ToDoItem({
	id,
	title,
	done
}) {
	const dispatch = useDispatch();

	return (
		<div className={s.item}>
			<p className={done ? s.title_done : ''}>{title}</p>
			<input
				type='checkbox'
				checked={done}
				onChange={() => dispatch(changeStatus(id))}
			/>
			<button onClick={() => dispatch(remove(id))}>Delete</button>
		</div>
	);
}
