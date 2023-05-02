import React from 'react';
import ToDoItem from '../ToDoItem';
import { useSelector } from 'react-redux';

export default function ToDoList({ completed }) {
	const toDoList = useSelector((state) => state.todo.list);
	return (
		<div>
			{toDoList
				.filter(({ done }) => done === completed)
				.map((item) => (
					<ToDoItem key={item.id} {...item} />
				))}
		</div>
	);
}
