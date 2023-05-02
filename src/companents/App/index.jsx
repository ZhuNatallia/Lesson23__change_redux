import './style.module.css';
import ToDoList from '../ToDoList';
import ToDoAdd from '../ToDoAdd';
import UsersList from '../UsersList';
import Test from '../Test';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTodos } from '../../store/slice/todoSlice';
import { fetchUsers } from '../../store/slice/userSlice';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTodos());
		dispatch(fetchUsers());
	}, []);

	return (
		<div>
			<Test />
			<ToDoAdd />
			<h2>Сделанные</h2>
			<ToDoList completed={true} />
			<h2>В процессе</h2>
			<ToDoList completed={false} />
			<UsersList />
		</div>
	);
}

export default App;
