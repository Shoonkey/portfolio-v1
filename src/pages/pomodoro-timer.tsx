import { Flex, Heading } from "@chakra-ui/react"

import Page from "../projects/pomodoro-timer/components/Page"
import Clock from "../projects/pomodoro-timer/components/Clock"
import TodoList from "../projects/pomodoro-timer/components/TodoList"

function PomodoroTimer() {
  return (
    <Page title="Pomodoro timer">
      <Heading size={{ base: "2xl", lg: "3xl" }} fontFamily="inherit" p={7}>
        Pomodoro timer
      </Heading>
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
