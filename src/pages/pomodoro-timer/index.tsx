import { Flex, Heading } from "@chakra-ui/react"

import BackToPortfolioButton from "../../projects/portfolio/components/BackToPortfolioButton"
import Page from "../../projects/pomodoro-timer/components/Page"
import Clock from "../../projects/pomodoro-timer/components/Clock"
import TodoList from "../../projects/pomodoro-timer/components/TodoList"

function PomodoroTimer() {
  return (
    <Page title="Home | Pomodoro timer">
      <Flex alignItems="center" p={7}>
        <BackToPortfolioButton />
        <Heading ml={4} size={{ base: "2xl", lg: "3xl" }} fontFamily="inherit" display="flex" alignItems="center">
          Pomodoro timer
        </Heading>
      </Flex>
      <Flex
        flexGrow={1}
        alignItems="stretch"
        py={4}
        px={6}
        gap={6}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Clock />
        <TodoList />
      </Flex>
    </Page>
  )
}

export default PomodoroTimer
