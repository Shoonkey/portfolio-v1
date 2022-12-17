import { useEffect, useState } from "react"
import { Box, Button, Flex, Heading, Spinner, Text } from "@chakra-ui/react"

import BackToPortfolioButton from "../../projects/portfolio/components/BackToPortfolioButton"
import Page from "../../projects/music-theory/components/Page"
import Staff from "../../projects/music-theory/components/Staff"

import { getNoteFromIndex, getRandomNote } from "./util"

type TrebleClefNote = "A" | "B" | "C" | "D" | "E" | "F" | "G"

interface QuizData {
  stage: "choose-note" | "note-chosen"
  expectedNote: TrebleClefNote
  chosenNoteIndex: number | null
}

function MusicTheoryQuiz() {
  const [quizData, setQuizData] = useState<QuizData | null>(null)

  // Note: state is set at first through a React effect to prevent Next's hydration error
  // (https://nextjs.org/docs/messages/react-hydration-error)
  useEffect(() => {
    setQuizData({
      stage: "choose-note",
      expectedNote: getRandomNote(),
      chosenNoteIndex: null,
    })
  }, [])

  if (!quizData)
    return (
      <Page title="Loading... | Music theory quiz">
        <Flex flexGrow={1} justifyContent="center" alignItems="center">
          <Spinner />
        </Flex>
      </Page>
    )

  return (
    <Page title="Home | Music theory quiz">
      <Flex alignItems="center" p={7}>
        <BackToPortfolioButton />
        <Heading
          ml={4}
          size={{ base: "2xl", lg: "3xl" }}
          fontFamily="inherit"
          display="flex"
          alignItems="center"
        >
          Music theory
        </Heading>
      </Flex>
      <Flex flexDir="column" flexGrow={1} py={4} px={6} gap={6}>
        <Text ml={6} fontSize={22} color="gray.500" letterSpacing=".8px">
          Click / Tap a line or space to place a note.
        </Text>
        <Flex justifyContent="center" flexDir="column">
          <Staff
            chosenNoteIndex={quizData.chosenNoteIndex}
            onNoteChoice={(index) =>
              setQuizData({
                ...quizData,
                chosenNoteIndex: index,
              })
            }
          />
          <Flex justifyContent="center" gap={4}>
            <Button
              bg="#fcbd44"
              color="black"
              disabled={
                quizData.chosenNoteIndex === null ||
                quizData.stage === "note-chosen"
              }
              _hover={{ bg: "#fab228" }}
              onClick={() => {
                setQuizData({ ...quizData, stage: "note-chosen" })
              }}
            >
              Confirm
            </Button>
            {quizData.stage === "note-chosen" && (
                <Button
                  onClick={() => {
                    setQuizData({
                      stage: "choose-note",
                      expectedNote: getRandomNote(),
                      chosenNoteIndex: null,
                    })
                  }}
                >
                  Next
                </Button>
              )}
          </Flex>
        </Flex>
        <Box>
          {quizData.stage === "choose-note" && (
            <Heading
              as="h2"
              fontSize={48}
              textAlign="center"
              color="#fcbd44"
              fontWeight="light"
            >
              Place a note in <strong>{quizData.expectedNote}</strong>
            </Heading>
          )}
          {quizData.stage === "note-chosen" && (
            <Text
              textAlign="center"
              color={
                quizData.expectedNote ===
                getNoteFromIndex(quizData.chosenNoteIndex)
                  ? "green.400"
                  : "red.400"
              }
              fontSize={24}
            >
              {quizData.expectedNote ===
              getNoteFromIndex(quizData.chosenNoteIndex)
                ? "You got it!"
                : `Oh no, you missed! You chose ${getNoteFromIndex(
                    quizData.chosenNoteIndex
                  )}`}
            </Text>
          )}
        </Box>
      </Flex>
    </Page>
  )
}

export default MusicTheoryQuiz
