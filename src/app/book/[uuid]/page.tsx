import { Metadata } from "next";
import Balancer from "react-wrap-balancer";
import { BookModifyForm } from "./book-modify-form";

interface Props {
	params: {
		uuid: string;
	};
}

export default function Page({ params }: Props) {
	return (
		<div className="space-y-8 md:space-y-12 lg:space-y-16">
			<h1 className="text-3xl font-bold text-bookstoreBlue md:text-4xl lg:text-5xl">
				<Balancer>Modify your book</Balancer>
			</h1>
			<BookModifyForm uuid={params.uuid} />
		</div>
	);
}

export const metadata: Metadata = {
	title: "Modify book | Blazesoft interview",
	description: "On this page you can modify your book. You can change its name, description, price and category.",
};
