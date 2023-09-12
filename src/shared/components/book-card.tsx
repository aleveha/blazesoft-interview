"use client";

import { Book } from "@api/types";
import { randomColor } from "@shared/utils/randomColor";
import Link from "next/link";
import { FC } from "react";
import Balancer from "react-wrap-balancer";
import { Label } from "./label";

interface Props {
	book: Book;
}

export const BookCard: FC<Props> = ({ book: { category, description, uuid, name, price } }) => {
	const handleDelete = () => {
		// TODO delete book
		// eslint-disable-next-line no-console
		console.log("Deleting ", uuid);
	};

	return (
		<li className="grid grid-cols-[auto_auto_1fr] gap-4 overflow-hidden rounded-xl border border-neutral-200 bg-white">
			<Link
				className="group flex items-center justify-center px-4 sm:px-6 lg:px-8"
				href={`/book/${uuid}`}
				style={{ backgroundColor: randomColor({ text: name, type: "rgba", opacity: 0.6 }) }}
			>
				<svg className="smooth h-12 md:h-16 md:group-hover:scale-125" fill="currentColor" viewBox="0 0 24 24">
					<path d="M8,3 L8,17 L19,17 L19,3.5 C19,3.22385763 18.7761424,3 18.5,3 L8,3 Z M7,3 L6.5,3 C5.67157288,3 5,3.67157288 5,4.5 L5,17.4998169 C5.41783027,17.1859724 5.93719704,17 6.5,17 L7,17 L7,3 Z M4.15121433,20.3582581 C4.05793442,20.2674293 4,20.1404803 4,20 L4,4.5 C4,3.11928813 5.11928813,2 6.5,2 L18.5,2 C19.3284271,2 20,2.67157288 20,3.5 L20,20.5 C20,21.3284271 19.3284271,22 18.5,22 L6.5,22 C5.42082093,22 4.50134959,21.3162099 4.15121433,20.3582581 L4.15121433,20.3582581 Z M19,18 L6.5,18 C5.67157288,18 5,18.6715729 5,19.5 C5,20.3284271 5.67157288,21 6.5,21 L18.5,21 C18.7761424,21 19,20.7761424 19,20.5 L19,18 Z M10.5,10 C10.2238576,10 10,9.77614237 10,9.5 C10,9.22385763 10.2238576,9 10.5,9 L16.5,9 C16.7761424,9 17,9.22385763 17,9.5 C17,9.77614237 16.7761424,10 16.5,10 L10.5,10 Z M10.5,8 C10.2238576,8 10,7.77614237 10,7.5 C10,7.22385763 10.2238576,7 10.5,7 L14.5,7 C14.7761424,7 15,7.22385763 15,7.5 C15,7.77614237 14.7761424,8 14.5,8 L10.5,8 Z" />
				</svg>
			</Link>
			<div className="flex w-full flex-col gap-2 py-2 md:gap-4 md:py-4">
				<Link className="w-fit" href={`/book/${uuid}`}>
					<h3 className="smooth text-lg font-semibold text-bookstoreBlue hover:text-bookstoreOrange md:text-xl lg:text-2xl">
						<Balancer>{name}</Balancer>
					</h3>
				</Link>
				<div className="flex flex-wrap items-center justify-start gap-4">
					<Label hasGeneratedColor>{category}</Label>
					<Label className="bg-bookstoreYellow/60">{"$\xa0" + price}</Label>
				</div>
				<p className="line-clamp-2 md:line-clamp-3">{description}</p>
			</div>
			<button className="smooth m-1 h-fit rounded-full p-2 text-bookstoreBlue hover:bg-red-50 hover:text-red-600" onClick={handleDelete}>
				<svg fill="currentColor" height={14} viewBox="0 0 448 512">
					<path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
				</svg>
			</button>
		</li>
	);
};
