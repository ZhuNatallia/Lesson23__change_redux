import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
	'users/fetchUsers',
	async (_, { rejectWithValue }) => {
		try {
			const resp = await fetch('https://jsonplaceholder.typicode.com/users');
			if (!resp.ok) {
				throw new Error('Server error!');
			}
			const data = await resp.json();
			const clearData = data.map(({ id, name }) => ({
				id,
				name,
				age: Math.round(Math.random() * 20 + 10),
			}));
			return clearData;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const fetchRemove = createAsyncThunk(
	'users/fetchRemove',
	async (id, { dispatch }) => {
		const resp = await fetch(
			`https://jsonplaceholder.typicode.com/users/${id}`,
			{
				method: 'DELETE',
			}
		);
		const data = await resp.json();
		dispatch(remove(id));
	}
);

export const usersSlice = createSlice({
	name: 'users',
	initialState: {
		list: [
			{ id: 1, name: 'Stefan', age: 24 },
			{ id: 2, name: 'Olga', age: 37 },
			{ id: 3, name: 'Irina', age: 18 },
		],
	},
	reducers: {
		age_increment: (state, action) => {
			state.list.find(({ id }) => id === action.payload).age++;
		},
		remove: (state, { payload }) => {
			state.list = state.list.filter(({ id }) => id !== payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchUsers.fulfilled, (state, { payload }) => {
				state.status = 'resolve';
				state.list = payload;
			})
			.addCase(fetchUsers.rejected, (state, { payload }) => {
				state.status = 'rejected';
				state.error = payload;
			});
	},
});
export const { age_increment, remove } = usersSlice.actions;
export default usersSlice.reducer;
