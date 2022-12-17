import Head from "next/head"
import { Flex, FlexProps } from "@chakra-ui/react"
import { ReactNode } from "react"

import Navbar from "./Navbar"
import Footer from "./Footer"
import useI18N from "../hooks/useI18N"

interface PageProps {
  children: ReactNode
  projectName: string
  title: string
  showBackToPortfolioButton?: boolean
  containerProps?: FlexProps
}

function Page({
  children,
  projectName,
  title,
  showBackToPortfolioButton = true,
  containerProps = {},
}: PageProps) {
  const i18n = useI18N(projectName)

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
        <title>{i18n.meta.pageTitles[title]}</title>
        <meta name="description" content="@shoonkey's portfolio" />
      </Head>
      <Navbar title={i18n.content.title} showBackButton={showBackToPortfolioButton} />
      <Flex flexDir="column" as="main" flexGrow={1}>
        {children}
      </Flex>
      <Footer />
    </Flex>
  )
}

export default Page
