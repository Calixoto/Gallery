import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { GetIDProvider } from "../contexts/getID";
import { GlobalStyles } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GetIDProvider>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </GetIDProvider>
  );
}

export default MyApp;
