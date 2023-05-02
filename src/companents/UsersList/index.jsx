import React from 'react';
import { useSelector } from 'react-redux';
import UserItem from '../UserItem';

export default function UsersList() {
    const { list, status, error } = useSelector((state) => state.users);
    
    if (status === 'rejected') {
        alert(error)
    }
	return (
		<div>
			{list.map((item) => (
				<UserItem key={item.id} {...item} />
			))}
		</div>
	);
}
