import Head from "next/head"
import { Box, Flex, FlexProps } from "@chakra-ui/react"
import { ReactNode } from "react"

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
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <Navbar /> */}
      <Box as="main">{children}</Box>
      {/* <Footer /> */}
    </Flex>
  )
}

export default Page
