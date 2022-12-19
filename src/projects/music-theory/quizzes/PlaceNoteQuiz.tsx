import { useEffect, useState } from "react"
import { Box, Button, Flex, Heading, Spinner, Text } from "@chakra-ui/react"

import Page from "../../portfolio/components/Page"
import useI18N from "../../portfolio/hooks/useI18N"

import Staff from "../components/Staff"
import Clef from "../shared/Clef"
import { getNoteFromIndex, getRandomNote } from "./util"

type TrebleClefNote = "A" | "B" | "C" | "D" | "E" | "F" | "G"

interface QuizData {
  stage: "choose-note" | "note-chosen"
  expectedNote: TrebleClefNote
  chosenNoteIndex: number | null
}

interface PlaceNoteQuizProps {
  clef: Clef
}

function PlaceNoteQuiz({ clef }: PlaceNoteQuizProps) {
  const i18n = useI18N("music-theory-quiz")

  const [quizData, setQuizData] = useState<QuizData | null>(null)

  // Has the user changed the note placement after confirming selection and before clicking next?
  const [reselectedAfterConfirm, setReselectedAfterConfirm] = useState(false);

  // Note: state is set at first through a React effect to prevent Next's hydration error
  // (https://nextjs.org/docs/messages/react-hydration-error)
  useEffect(() => {
    setQuizData({
      stage: "choose-note",
      expectedNote: getRandomNote(clef),
      chosenNoteIndex: null,
    })
  }, [])

  if (!quizData)
    return (
      <Page projectName="music-theory-quiz" title="loading">
        <Flex flexGrow={1} justifyContent="center" alignItems="center">
          <Spinner />
        </Flex>
      </Page>
    )

  return (
    <Page projectName="music-theory-quiz" title="placeNote">
      <Flex flexDir="column" flexGrow={1} py={4} px={6} gap={6}>
        <Text ml={6} fontSize={22} color="gray.500" letterSpacing=".8px">
          {i18n.content.placeNote.exercise.description}
        </Text>
        <Flex justifyContent="center" flexDir="column">
          <Staff
            clef={clef}
            chosenNoteIndex={quizData.chosenNoteIndex}
            onNoteChoice={(index) => {

              if (quizData.stage === "note-chosen")
                setReselectedAfterConfirm(true)
              
              setQuizData({
                ...quizData,
                chosenNoteIndex: index,
              })
            }}
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
              {i18n.content.placeNote.confirm}
            </Button>
            {quizData.stage === "note-chosen" && (
              <Button
                onClick={() => {
                  setQuizData({
                    stage: "choose-note",
                    expectedNote: getRandomNote(clef),
                    chosenNoteIndex: null,
                  })
                  setReselectedAfterConfirm(false)
                }}
              >
                {i18n.content.placeNote.next}
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
              {i18n.content.placeNote.exercise.goal}{" "}
              <strong>{quizData.expectedNote}</strong>
            </Heading>
          )}
          {quizData.stage === "note-chosen" && !reselectedAfterConfirm && (
            <Text
              textAlign="center"
              color={
                quizData.expectedNote ===
                getNoteFromIndex(clef, quizData.chosenNoteIndex)
                  ? "green.400"
                  : "red.400"
              }
              fontSize={24}
            >
              {quizData.expectedNote ===
              getNoteFromIndex(clef, quizData.chosenNoteIndex)
                ? i18n.content.placeNote.exercise.result.correct
                : `${
                    i18n.content.placeNote.exercise.result.incorrect
                  } ${getNoteFromIndex(clef, quizData.chosenNoteIndex)}`}
            </Text>
          )}
        </Box>
      </Flex>
    </Page>
  )
}

export default PlaceNoteQuiz
