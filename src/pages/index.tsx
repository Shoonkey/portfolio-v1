import { Heading, Text } from "@chakra-ui/react"
import type { NextPage } from "next"

import Page from "../components/Page"

const Home: NextPage = () => {
  return (
    <Page title="Página inicial">
      <Heading as="h1" size="2xl" fontFamily="Arvo">
        Portfolio
      </Heading>
      <Text mt={4} fontSize="1.5rem">
        Hello world, this is how it started.
      </Text>
    </Page>
  )
}

export default Home
