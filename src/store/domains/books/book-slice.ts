import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SliceCaseReducers } from "@reduxjs/toolkit/src/createSlice";
import { DUMMY_BOOKS } from "./dummy-books";
import { Book } from "./types";

interface BookReducers extends SliceCaseReducers<Book[]> {
	delete: (prevState: Book[], action: PayloadAction<string>) => Book[];
	reset: () => Book[];
	setTestValue: () => Book[];
}

export const bookSlice = createSlice<Book[], BookReducers>({
	name: "books",
	initialState: [],
	reducers: {
		delete: (prevState, action: PayloadAction<string>) => prevState.filter(book => book.uuid !== action.payload),
		reset: () => [],
		setTestValue: () => DUMMY_BOOKS,
	},
});

export const bookAction = bookSlice.actions;
