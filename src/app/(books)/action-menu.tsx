"use client";

import { Button } from "@shared/components/button/button";
import { useDispatch } from "@store";
import { bookAction } from "@store/domains/books/book-slice";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { v4 as uuid } from "uuid";

export const ActionMenu: FC = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const handleAddingNewBook = () => {
		router.push(`/book/${uuid()}`);
	};

	const handleAddingTestBooks = () => {
		dispatch(bookAction.setTestValue());
	};

	const handleReset = () => {
		dispatch(bookAction.reset());
	};

	return (
		<div className="flex w-full flex-wrap items-center gap-4">
			<Button onClick={handleAddingNewBook} variant="solid">
				Add new book to list
			</Button>
			<Button onClick={handleAddingTestBooks} variant="outline">
				Set test books
			</Button>
			<Button onClick={handleReset} variant="outline">
				Reset book list
			</Button>
		</div>
	);
};
