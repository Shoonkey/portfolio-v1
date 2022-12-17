import { Flex } from "@chakra-ui/react"
import Head from "next/head"
import { ReactNode, useMemo } from "react"

interface PageProps {
  title: string
  children: ReactNode
}

function Page({ title, children }: PageProps) {
  const pageTitle = useMemo(() => `${title} | Pomodoro timer`, [title])

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Flex
        flexDir="column"
        fontFamily="Cabin, sans-serif"
        minH="100vh"
        bg="gray.800"
        color="#e2e2e2"
      >
        {/* <Navbar /> */}
        <Flex as="main" flexDir="column" flexGrow={1}>
          {children}
        </Flex>
        {/* <Footer /> */}
      </Flex>
    </>
  )
}

export default Page
