	import Header from "@/components/Header";
	import ResetStyle from "@/styles/ResetStyle";
	import type { AppProps } from "next/app";
	import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
	import Footer from "@/components/Footer";
	import Cart from "@/components/Cart";
	import { appContext } from "@/contexts/appContext";
import { useContext } from "react";

	export default function App({ Component, pageProps }: AppProps) {
		const queryClient = new QueryClient();
		const { productsSelected, setProductsSelected, isOpen, setIsOpen } = useContext(appContext);

		return (
			<>
				<appContext.Provider value={{ productsSelected, setProductsSelected, isOpen, setIsOpen }}>
				<QueryClientProvider client={queryClient}>
					<ResetStyle />
					<Header />
					<Footer />
					<Cart />
					<Component {...pageProps} />
				</QueryClientProvider>
				</appContext.Provider>
			</>
		);
	}
