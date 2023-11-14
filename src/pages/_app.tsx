import Header from "@/components/Header";
import ResetStyle from "@/styles/ResetStyle";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import { AppContextProvider } from "@/contexts/appContext";

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <ResetStyle />
        <Header />
        <Footer />
        <Cart />
        <Component {...pageProps} />
      </QueryClientProvider>
    </AppContextProvider>
  );
}

export default App;