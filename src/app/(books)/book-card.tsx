import { Button } from "@shared/components/button/button";
import { Icons } from "@shared/components/icons/icons";
import { Label } from "@shared/components/label/label";
import { randomColor } from "@shared/utils/randomColor";
import { Book } from "@store/domains/books/types";
import Link from "next/link";
import { FC } from "react";

interface Props {
	book: Book;
	onDelete: () => void;
}

export const BookCard: FC<Props> = ({ book: { category, description, uuid, name, price }, onDelete }) => (
	<li className="grid grid-cols-[min-content_auto_min-content] gap-4 overflow-hidden rounded-xl border border-neutral-200 bg-white">
		<Link
			className="group flex items-center justify-center px-4 sm:px-6 lg:px-8"
			href={`/book/${uuid}`}
			style={{ backgroundColor: randomColor({ text: name, type: "rgba", opacity: 0.6 }) }}
		>
			<Icons.Book className="h-12 transition-all md:h-16 md:group-hover:scale-125" />
		</Link>
		<div className="flex flex-col gap-2 py-2 md:gap-3 md:py-4">
			<Link className="w-fit" href={`/book/${uuid}`}>
				<h3 className="line-clamp-2 text-lg font-semibold text-bookstoreBlue transition-all hover:text-bookstoreOrange md:text-xl lg:text-2xl">
					{name}
				</h3>
			</Link>
			<div className="flex flex-wrap items-center justify-start gap-4">
				<Label hasGeneratedColor>{category}</Label>
				<Label color="gold">{"$\xa0" + price}</Label>
			</div>
			<p className="line-clamp-2 md:line-clamp-3">{description}</p>
		</div>
		<Button className="m-1 h-fit rounded-full p-2 text-bookstoreBlue hover:bg-red-50 hover:text-red-600" onClick={onDelete}>
			<Icons.Trash className="h-3.5" />
		</Button>
	</li>
);
