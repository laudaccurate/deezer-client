/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import Head from "next/head";
import { ModalsProvider } from "@mantine/modals";
import { AppShell } from "@mantine/core";
import AppHeader from "../Home/Navbar/Header";

const Layout: React.FC<{ pageTitle: string, children: any }> = ({ pageTitle, children }) => {

  return (
    <>
      <Head>
        <title>{`Deezer | ${pageTitle}`}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="./images/logo-vercel.svg" />
      </Head>

      <ModalsProvider
        modalProps={{
          centered: true,
        }}
      >
        <main className={`min-h-screen`}>
          <AppShell header={<AppHeader/>}>
          <div className="h-[calc(100%-60px)] w-full">{children}</div>
          </AppShell>
        </main>
      </ModalsProvider>
    </>
  );
}


export default Layout;