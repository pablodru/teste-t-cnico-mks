import Header from "@/components/Header";
import ResetStyle from "@/styles/ResetStyle";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<ResetStyle />
			<Header />
			<Component {...pageProps} />
		</>
	);
}
