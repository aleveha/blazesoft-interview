"use client";

import { Button } from "@shared/components/button/button";
import { Input } from "@shared/components/input/input";
import { useDispatch, useSelector } from "@store";
import { bookAction } from "@store/domains/books/book-slice";
import { Book } from "@store/domains/books/types";
import { useRouter } from "next/navigation";
import { FC, useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type BookFormData = Record<keyof Book, string>;

function getBookFormData(book: Partial<Book>): BookFormData {
	return {
		category: book.category ?? "",
		description: book.description ?? "",
		name: book.name ?? "",
		price: book.price?.toString() ?? "",
		uuid: book.uuid ?? "",
	};
}

interface Props {
	uuid: string;
}

export const BookModifyForm: FC<Props> = ({ uuid }) => {
	const router = useRouter();

	const book = useSelector(state => state.books.find(_book => _book.uuid === uuid));
	const dispatch = useDispatch();

	const {
		control,
		formState: { isDirty },
		handleSubmit,
	} = useForm<BookFormData>({
		defaultValues: getBookFormData(book ?? { uuid }),
	});

	const onSubmit = useCallback<SubmitHandler<BookFormData>>(
		data => {
			dispatch(bookAction.update({ ...data, price: parseInt(data.price, 10) }));
			router.push("/");
		},
		[dispatch, router]
	);

	const handleBack = useCallback(() => {
		// eslint-disable-next-line no-alert
		if (!isDirty || confirm("Are you sure you want to go back? All unsaved changes will be lost.")) {
			router.push("/");
		}
	}, [isDirty, router]);

	return (
		<form noValidate onSubmit={handleSubmit(onSubmit)}>
			<div className="space-y-6">
				<Input
					control={control}
					isRequired
					label="Book name"
					name="name"
					placeholder="Enter book name here.."
					rules={{
						maxLength: { value: 100, message: "Maximum length is 100 characters" },
						minLength: { value: 1, message: "Minimum length is 1 characters" },
					}}
				/>
				<div className="flex flex-col gap-6 md:flex-row">
					<Input
						control={control}
						isRequired
						label="Category"
						name="category"
						placeholder="Enter category here.."
						rules={{
							maxLength: { value: 30, message: "Maximum length is 30 characters" },
							minLength: { value: 2, message: "Minimum length is 2 characters" },
						}}
					/>
					<Input
						control={control}
						isRequired
						label="Price"
						name="price"
						placeholder="Enter price here.."
						rules={{
							validate: value => {
								if (value.startsWith("0")) {
									return "Price must not start with 0";
								}

								const numberValue = parseInt(value, 10);
								if (isNaN(numberValue) || !isFinite(numberValue)) {
									return "Price must be valid a number";
								}
							},
							max: { value: 1_000_000, message: "Maximum price exceeded" },
							min: { value: 1, message: "Minimum price exceeded" },
						}}
					/>
				</div>
				<Input
					component="textarea"
					control={control}
					isRequired
					label="Book description"
					name="description"
					placeholder="Enter book description here.."
					rules={{
						maxLength: { value: 500, message: "Maximum length is 500 characters" },
					}}
				/>
				<div className="flex flex-wrap gap-4">
					<Button type="submit" variant="solid">
						Save book
					</Button>
					<Button onClick={handleBack} type="button" variant="outline">
						Back to main page
					</Button>
				</div>
			</div>
		</form>
	);
};
