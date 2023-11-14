import Header from "@/components/Header";
import ResetStyle from "@/styles/ResetStyle";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ResetStyle />
				<Header />
				<Component {...pageProps} />
			</QueryClientProvider>
		</>
	);
}
