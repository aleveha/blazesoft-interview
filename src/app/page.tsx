import { getInitialBooks } from "@api/getInitialBooks";
import { BookCard } from "@shared/components/book-card";
import Balancer from "react-wrap-balancer";

export default async function Page() {
	const books = await getInitialBooks();

	return (
		<div className="flex flex-col items-start justify-start gap-8 md:gap-12 lg:gap-16">
			<h1 className="text-5xl font-bold text-bookstoreBlue md:text-6xl lg:text-7xl">
				<Balancer>Welcome to your personal bookstore!</Balancer>
			</h1>
			<h2 className="text-lg md:text-xl lg:text-2xl">
				<Balancer>
					Here you can easily <span className="font-semibold">add, edit or delete</span> your books!
				</Balancer>
			</h2>
			<button className="button">Add new book to list</button>
			<ul className="grid w-full grid-cols-1 gap-6 xl:grid-cols-2">
				{books.map(book => (
					<BookCard book={book} key={book.uuid} />
				))}
			</ul>
		</div>
	);
}
