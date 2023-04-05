import React, { FC } from "react"

import Head from "next/head"
import { Header } from "./Header"
import { Box, VStack, Text } from "@chakra-ui/react"
import { HEADER_HEIGHT } from "./Header/constants"

interface Props {
  children: React.ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Chat App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box as={"main"} h={"100vh"} marginTop={`-${HEADER_HEIGHT}`} paddingTop={HEADER_HEIGHT}>
        {children}
      </Box>
    </>
  )
}
