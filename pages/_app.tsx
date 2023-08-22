import "@/styles/globals.css";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import LoadingProvider from "../components/Utils/LoadingFallback";
import { Karla } from "next/font/google";
import Layout from "@/components/Utils/Layout";
import ErrorBoundary from "@/components/Utils/ErrorBoundary";
import { SearchResult } from "@/hooks/context/SearchResult";
import { QueryContext } from "@/hooks/context/SearchText";

const font = Karla({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [searchResult, setSearchResult] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (window.localStorage !== undefined) {
      if (localStorage.getItem("searchResult")) {
        setSearchResult(JSON.parse(localStorage.getItem("searchResult")!));
      }
      if (localStorage.getItem("query")) {
        setQuery(localStorage.getItem("query")!);
      }
    }
  }, []);

  return (
    <div className={font.className}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          loader: "bars",
          globalStyles: (theme) => ({
            "*, *::before, *::after": {
              boxSizing: "border-box",
            },
          }),
          colors: {
            deezer: [
              "#fff5ea",
              "#ffead5",
              "#fee0bf",
              "#fed5aa",
              "#fecb95",
              "#fec180",
              "#feb66b",
              "#fdac55",
              "#fda140",
              "#fd972b",
            ],
          },
          primaryColor: "deezer",

          colorScheme: "light",
        }}
      >
        <Notifications position="top-center" />

        <LoadingProvider>
          <SearchResult.Provider value={{ searchResult, setSearchResult }}>
            <QueryContext.Provider value={{ query, setQuery }}>
              <Layout pageTitle="Page">
                <ErrorBoundary>
                  <Component {...pageProps} />
                </ErrorBoundary>
              </Layout>
            </QueryContext.Provider>
          </SearchResult.Provider>
        </LoadingProvider>
      </MantineProvider>
    </div>
  );
}
