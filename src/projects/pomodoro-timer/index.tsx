import { Flex } from "@chakra-ui/react"

import Page from "../portfolio/components/Page"

import Clock from "./components/Clock"
import TodoList from "./components/TodoList"

function PomodoroTimer() {
  return (
    <Page projectName="pomodoro-timer" title="home">
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
