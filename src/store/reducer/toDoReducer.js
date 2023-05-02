const TODO_DELETE = 'TODO_DELETE';
const TODO_CHANGE_STATUS = 'TODO_CHANGE_STATUS';
const TODO_ADD = 'TODO_ADD';

export const todoDeleteAction = (payload) => ({ type: TODO_DELETE, payload });
export const todoChangeStatusAction = (payload) => ({
	type: TODO_CHANGE_STATUS,
	payload,
});
export const todoAddAction = (payload) => ({ type: TODO_ADD, payload});

const defaultState = [
	{ id: 1, title: 'essen', done: true },
	{ id: 2, title: 'laufen', done: false },
	{ id: 3, title: 'wiederholen JS', done: true },
];

export const todoReducer = (state = defaultState, action) => {
	if (action.type === TODO_CHANGE_STATUS) {
		const target = state.find(({ id }) => id === action.payload);
		target.done = !target.done;
		return [...state];
	} else if (action.type === TODO_DELETE) {
		return state.filter(({ id }) => id !== action.payload);
	} else if (action.type === TODO_ADD) {
		return [...state, {id: Date.now(), title: action.payload, done: false}]
	}
		return state;
};
