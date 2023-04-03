import React, { FC } from "react";

import Head from "next/head";
import { Header } from "./Header";
import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as={"main"}>
        <Header />
        {children}
      </Box>
    </>
  );
};