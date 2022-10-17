import Head from "next/head"
import { Box, Flex, FlexProps } from "@chakra-ui/react"
import { ReactNode } from "react"

import Navbar from "./Navbar"
import Footer from "./Footer"

interface PageProps {
  title: string
  children: ReactNode
  containerProps?: FlexProps
}

function Page({ title, children, containerProps = {} }: PageProps) {
  const pageName = `${title} | Portfolio`

  return (
    <Flex
      flexDir="column"
      minH="100vh"
      fontFamily="'Roboto Slab', sans-serif"
      px={10}
      py={6}
      {...containerProps}
    >
      <Head>
        <title>{pageName}</title>
        <meta name="description" content="@shoonkey's portfolio" />
      </Head>
      <Navbar />
      <Box as="main" flexGrow={1}>{children}</Box>
      <Footer />
    </Flex>
  )
}

export default Page
