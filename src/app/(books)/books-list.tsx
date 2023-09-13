"use client";

import { useDispatch, useSelector } from "@store";
import { bookAction } from "@store/domains/books/book-slice";
import { FC, useCallback } from "react";
import { BookCard } from "./book-card";

export const BooksList: FC = () => {
	const books = useSelector(state => state.books);
	const dispatch = useDispatch();

	const handleDelete = useCallback(
		(uuid: string) => () => {
			dispatch(bookAction.delete(uuid));
		},
		[dispatch]
	);

	if (!books.length) {
		return (
			<div className="space-y-4">
				<h3 className="text-lg font-bold text-bookstoreBlue">Seems like you have no books yet! :(</h3>
				<p>
					<span className="font-semibold">But don&apos;t worry!</span> Click the button above to add your first book to the list.
				</p>
			</div>
		);
	}

	return (
		<ul className="grid w-full grid-cols-1 gap-6 xl:grid-cols-2">
			{books.map(book => (
				<BookCard book={book} key={book.uuid} onDelete={handleDelete(book.uuid)} />
			))}
		</ul>
	);
};
