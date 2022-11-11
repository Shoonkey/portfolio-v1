import { Box, Flex, Grid, Heading, HStack, Image, Text } from "@chakra-ui/react"
import type { NextPage } from "next"

import Page from "../components/Page"
import Project from "../components/Project"

interface TechProps {
  logoSrc: string
  name: string
}

const Tech = ({ logoSrc, name }: TechProps) => {
  return (
    <Box>
      <Image
        src={logoSrc}
        alt={`${name} logo`}
        h={{ base: "48px", md: "64px" }}
      />
      <Text mt={2} textAlign="center">
        <strong>{name}</strong>
      </Text>
    </Box>
  )
}

const PlaceholderProject = () => {
  return (
    <Box w="100%" maxW="350px" style={{ textIndent: "initial" }}>
      <Box h="200px" bg="#eb5df5" borderRadius="1.5rem" />
      <Heading mt={2} as="h2" size="lg" textAlign="center">
        Placeholder
      </Heading>
    </Box>
  )
}

const Home: NextPage = () => {
  return (
    <Page title="Home" containerProps={{ fontSize: "1.25rem" }}>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        justifyContent="center"
        alignItems="center"
        textAlign={{ base: "center", lg: "initial" }}
        py={4}
        gap={6}
      >
        <Image
          src="/pfp.jpg"
          alt="Me looking to the right smiling with messy hair"
          w={{ base: "80%", md: "400px" }}
          borderRadius="40%"
        />
        <Box>
          <Heading as="h2" size="2xl">
            Hello there!
          </Heading>
          <Box>
            <Text>
              My name is <strong>Richard</strong>.
            </Text>
            <Text>I&apos;m a full stack engineer that works mainly with:</Text>
            <Flex
              gap={6}
              mt={3}
              p={4}
              bg="blackAlpha.400"
              justifyContent="space-around"
              borderRadius="1rem"
            >
              <Tech logoSrc="/react-logo.svg" name="React" />
              <Tech logoSrc="/node-logo.svg" name="Node" />
              <Tech logoSrc="/next-logo.svg" name="Next" />
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Box
        textAlign={{ base: "initial", md: "center" }}
        style={{ textIndent: "1rem" }}
      >
        <Text>
          Besides those technologies, I have also worked with{" "}
          <strong>Vue</strong> and <strong>Express</strong> in the past.
        </Text>
        <Text>Here are some of my projects:</Text>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          justifyItems="center"
          gap={4}
          mt={4}
        >
          <Project
            name="Pomodoro timer"
            githubLink="https://github.com/Shoonkey/pomodoro-timer"
            imageSource="/pomodoro-timer.png"
          />
          <Project
            name="Website redesign (Beecrowd, unofficial)"
            githubLink="https://github.com/Shoonkey/beecrowd-redesign"
            imageSource="/beecrowd-redesign.png"
            inProgress
          />
        </Grid>
      </Box>
    </Page>
  )
}

export default Home
