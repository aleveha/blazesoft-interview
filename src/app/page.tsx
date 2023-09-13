import Balancer from "react-wrap-balancer";
import { ActionMenu } from "./(books)/action-menu";
import { BooksList } from "./(books)/books-list";

export default function Page() {
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
			<ActionMenu />
			<BooksList />
		</div>
	);
}
