import React from 'react';
import s from './style.module.css'
import { useDispatch } from 'react-redux';
import { age_increment, fetchRemove } from '../../store/slice/userSlice';

export default function UserItem({ id, name, age }) {
    const dispatch = useDispatch();
	return (
		<div className={s.item}>
			<p>{name} </p>
            <p>{age} </p>
            <button onClick={() => dispatch(age_increment(id))}>+</button>
            <button onClick={()=> dispatch(fetchRemove(id))}>Delete</button>
		</div>
	);
}
