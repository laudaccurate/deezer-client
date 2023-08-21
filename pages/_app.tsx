import "@/styles/globals.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import LoadingProvider from "../components/Utils/LoadingFallback";
import { Poppins } from "next/font/google";
import Layout from "@/components/Utils/Layout";
import ErrorBoundary from "@/components/Utils/ErrorBoundary";

const font = Poppins({
  subsets: ["latin"],
  display: "swap",
  // variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {

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

            body: {
              ...theme.fn.fontStyles(),
              ...font.style,
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[7]
                  : theme.white,
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[0]
                  : theme.black,
              lineHeight: theme.lineHeight,
            },
          }),

          fontFamily: font.style.fontFamily,
          fontFamilyMonospace: "Poppins, Courier, monospace",
          headings: { fontFamily: "Poppins, sans-serif" },
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
        {/* <CustomFonts /> */}
        <Notifications position="top-center" />

        <LoadingProvider>
          {/* <PersistLogin/> */}
          
                <Layout pageTitle="Page">
                  <ErrorBoundary>
                    <Component {...pageProps} />
                  </ErrorBoundary>
                </Layout>
        </LoadingProvider>
      </MantineProvider>
    </div>
  );
}
