import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./domains/books/book-slice";

const rootReducer = combineReducers({
	books: bookSlice.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== "production",
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
