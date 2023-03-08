import type { NextPage } from "next";
import Link from "next/link";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ChatCircleText } from "phosphor-react";
import { useContext } from "react";

import { I18NContext } from "@/projects/portfolio/components/I18NProvider";
import Page from "@/projects/portfolio/components/Page";
import Project from "@/projects/portfolio/components/Project";
import Tech from "@/projects/portfolio/components/Tech";

const Home: NextPage = () => {
  const { getI18N } = useContext(I18NContext);
  const i18n = getI18N("portfolio");

  return (
    <Page
      projectName="portfolio"
      title="home"
      showBackToPortfolioButton={false}
      containerProps={{ fontSize: "1.25rem" }}
    >
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
          alt={i18n.content.home.profilePictureAlt}
          w={{ base: "80%", md: "400px" }}
          borderRadius="40%"
        />
        <Box>
          <Heading as="h2" size="2xl">
            {i18n.content.home.hello}
          </Heading>
          <Box>
            <Text
              dangerouslySetInnerHTML={{ __html: i18n.content.home.greeting }}
            />
            <Text>{i18n.content.home.workDescription}</Text>
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
            <Flex fontSize="1rem" justifyContent="center" alignItems="center" mt={2}>
              <Text as="span" color="gray.500" mr={2} display="inline-block">
                {i18n.content.home.contactEmailDescription}
              </Text>
              <Text as="strong" letterSpacing=".8px">
                shoonkey.dev@gmail.com
              </Text>
              <Text as="span" ml={2} color="pink.200" _hover={{ color: "pink.300" }}>
                <Link href="mailto:shoonkey.dev@gmail.com">
                  <ChatCircleText size={32} />
                </Link>
              </Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Box
        textAlign={{ base: "initial", md: "center" }}
        style={{ textIndent: "1rem" }}
      >
        <Text
          dangerouslySetInnerHTML={{
            __html: i18n.content.home.portfolioDescription,
          }}
        />
        <Text>{i18n.content.home.projectHeader}</Text>
        <Flex gap={4} mt={4} flexWrap="wrap" justifyContent="center">
          <Project
            type="website"
            name={i18n.content.home.projects.pomodoroTimer.title}
            link="/pomodoro-timer"
            githubLink="https://github.com/Shoonkey/portfolio/tree/main/src/projects/pomodoro-timer"
            imageSource="/pomodoro-timer.png"
          />
          <Project
            type="website"
            name={i18n.content.home.projects.musicTheoryQuiz.title}
            link="/music-theory"
            githubLink="https://github.com/Shoonkey/portfolio/tree/main/src/projects/music-theory"
            imageSource="/music-theory-quiz.png"
          />
          <Project
            type="website"
            name={i18n.content.home.projects.flashCardApp.title}
            link="/flash-card-app"
            githubLink="https://github.com/Shoonkey/portfolio/tree/main/src/projects/flash-card-app"
            imageSource="/flash-cards.png"
          />
          <Project
            type="bot"
            name={i18n.content.home.projects.ordis.title}
            githubLink="https://github.com/Shoonkey/ordis"
            inProgress
          />
        </Flex>
      </Box>
    </Page>
  );
};

export default Home;
