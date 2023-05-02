/* import { combineReducers, createStore } from 'redux';
import { todoReducer } from './reducer/toDoReducer';

const rootReducer = combineReducers({
    todo: todoReducer
})

export const store = createStore(rootReducer) */

import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slice/todoSlice";
import userSlice from "./slice/userSlice";


export const store = configureStore({
	reducer: {
        todo: todoSlice,
        users: userSlice,
	},
});