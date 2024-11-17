import "@/styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { Montserrat, Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <main className={roboto.className}>
        <header className="p-4 bg-teal-400 drop-shadow-md">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏥</span>
            <h1
              className={`text-2xl font-bold text-white ${montserrat.className}`}
            >
              Frontend task
            </h1>
          </div>
        </header>
        <Component {...pageProps} />
      </main>
    </ApolloProvider>
  );
}
