import "@shared/styles.css";
import { LayoutProps } from "@shared/types";
import { Metadata } from "next";
import { Inter, Chela_One } from "next/font/google";

const FONT_BASE = Inter({
	display: "swap",
	subsets: ["cyrillic", "latin"],
	variable: "--font-base",
	weight: ["400", "500", "600", "700"],
});

const FONT_CUSTOM = Chela_One({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-custom",
	weight: ["400"]
});

export const metadata: Metadata = {
	title: "Bookstore | Blazesoft interview",
	description: "Welcome to your personal bookstore app! Here you can easily add, edit or delete your books!",
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en">
			<body className={`${FONT_BASE.variable} ${FONT_CUSTOM.variable}`}>
				<main>{children}</main>
			</body>
		</html>
	);
}
