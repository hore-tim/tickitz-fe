import "/styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Mulish } from "next/font/google";

const mulish = Mulish({
	subsets: ["latin", "latin-ext"],
	weight: ["200", "300", "400", "600", "700", "800", "900"],
	variable: "--font-mulish",
});

export default function App({ Component, pageProps }) {
	return (
		<div className={`${mulish.variable}`}>
			<Component {...pageProps} />
		</div>
	);
}
