import { chakra, Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import type { NextPage } from "next"

import Page from "../projects/portfolio/components/Page"
import Project from "../projects/portfolio/components/Project"
import Tech from "../projects/portfolio/components/Tech"

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
            <Text>I&apos;m a full stack engineer that works mainly in frontend with:</Text>
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
            <Text textAlign="center" fontSize="1rem" mt={1}>
              <Text as="span" color="gray.500" mr={2} display="inline-block">E-mail for contact:</Text>
              <Text as="strong" letterSpacing=".8px">shoonkey.dev@gmail.com</Text>
            </Text>
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
        <Flex gap={4} mt={4} flexWrap="wrap" justifyContent="center">
          <Project
            name="Pomodoro timer"
            link="/pomodoro-timer"
            githubLink="https://github.com/Shoonkey/pomodoro-timer"
            imageSource="/pomodoro-timer.png"
          />
          <Project
            name="Ordis (Discord bot for Warframe)"
            githubLink="https://github.com/Shoonkey/ordis"
            inProgress
            imageSource="/robot.jpg"
            imageAlt="Robot in a bright yellow background"
            imageCredit={
              <Text>
                Photo by{" "}
                <chakra.a
                  color="pink"
                  textDecoration="underline"
                  href="https://unsplash.com/@hobijist3d?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >
                  hobijist3d
                </chakra.a>{" "}
                on{" "}
                <chakra.a
                  color="pink"
                  textDecoration="underline"
                  href="https://unsplash.com/s/photos/robot?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >
                  Unsplash
                </chakra.a>
              </Text>
            }
          />
        </Flex>
      </Box>
    </Page>
  )
}

export default Home
