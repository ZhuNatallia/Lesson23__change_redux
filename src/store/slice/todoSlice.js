import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todo/fetchTodos', async () => {
	const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
	const data = await resp.json();
	const clearData = data.map(({ id, title, completed }) => ({
		id,
		title,
		done: completed,
	}));
	return clearData;
});

export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		list: [
			{ id: 1, title: 'essen', done: true },
			{ id: 2, title: 'laufen', done: false },
			{ id: 3, title: 'lernen', done: false },
		],
	},
	reducers: {
		remove(state, action) {
			state.list = state.list.filter(({ id }) => id !== action.payload);
		},
		add(state, action) {
			state.list.push({ id: Date.now(), title: action.payload, done: false });
		},
		changeStatus(state, action) {
			const target = state.list.find(({ id }) => id === action.payload);
			target.done = !target.done;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTodos.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchTodos.fulfilled, (state, { payload }) => {
				state.status = 'resolve';
				state.list = payload;
			})
			.addCase(fetchTodos.rejected, (state, { payload }) => {
				state.status = 'rejected';
				state.error = payload;
			});
	},
});
export const { remove, add, changeStatus } = todoSlice.actions;
export default todoSlice.reducer;
