import { randomUUID } from "crypto";
import { Book } from "./types";

const DUMMY_BOOKS: Book[] = [
	{
		category: "Fantasy",
		description:
			"The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J.R.R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million copies sold.",
		name: "The Lord of the Rings",
		price: 200,
		uuid: randomUUID(),
	},
	{
		category: "Fantasy",
		description:
			"The Chronicles of Narnia is a series of fantasy novels by British author C. S. Lewis. Written by Lewis, illustrated by Pauline Baynes, and originally published in London between 1950 and 1956, The Chronicles of Narnia has been adapted for radio, television, the stage, and film.",
		name: "The Chronicles of Narnia",
		price: 150,
		uuid: randomUUID(),
	},
	{
		category: "Sci-fi",
		description:
			"Fahrenheit 451 is a dystopian novel by American writer Ray Bradbury, first published in 1953. It is regarded as one of his best works. The novel presents a future American society where books are outlawed and firemen burn any that are found.",
		name: "Fahrenheit 451",
		price: 100,
		uuid: randomUUID(),
	},
	{
		category: "Drama",
		description:
			"Hamlet is a tragedy by William Shakespeare, probably written between 1599 and 1601. The play, set in Denmark, recounts how Prince Hamlet exacts revenge on his uncle Claudius, who has murdered Hamlet's father, the King, and then taken the throne and married Hamlet's mother.",
		name: "Hamlet",
		price: 50,
		uuid: randomUUID(),
	},
	{
		category: "Comedy",
		description:
			"Don Quixote, fully The Ingenious Gentleman Don Quixote of La Mancha, is a Spanish novel by Miguel de Cervantes Saavedra. Published in two parts, in 1605 and 1615, Don Quixote is the most influential work of literature from the Spanish Golden Age and the entire Spanish literary canon.",
		name: "Don Quixote",
		price: 250,
		uuid: randomUUID(),
	},
];

export async function getInitialBooks(): Promise<Book[]> {
	"use server";
	return DUMMY_BOOKS;
}
