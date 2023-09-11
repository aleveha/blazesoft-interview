import "@shared/styles.css";
import { LayoutProps } from "@shared/types";
import { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import { Providers } from "./providers";

const FONT_BASE = Inter({
	display: "swap",
	subsets: ["cyrillic", "latin"],
	variable: "--font-base",
	weight: ["400", "500", "600", "700"],
});

const FONT_CUSTOM = Open_Sans({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-custom",
	weight: ["500", "700"],
});

export const metadata: Metadata = {
	title: "Bookstore | Blazesoft interview",
	description: "Welcome to your personal bookstore app! Here you can easily add, edit or delete your books!",
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en">
			<body className={`${FONT_BASE.variable} ${FONT_CUSTOM.variable}`}>
				<main className="container mx-auto my-8 px-4 md:my-16">
					<Providers>{children}</Providers>
				</main>
			</body>
		</html>
	);
}
