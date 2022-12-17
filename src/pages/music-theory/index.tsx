import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"

import BackToPortfolioButton from "../../projects/portfolio/components/BackToPortfolioButton"
import Page from "../../projects/music-theory/components/Page"
import Staff from "../../projects/music-theory/components/Staff"
import { useState } from "react"

function generateRandomNote() {
  const notes = ["A", "B", "C", "D", "E", "F", "G"]
  const randomIndex = Math.floor(Math.random() * notes.length)
  return notes[randomIndex]
}

function isNoteCorrect(note: string, selectedNoteIndex: number) {
  let correctIndex = -1

  switch (note) {
    case "A":
      correctIndex = 5
    case "B":
      correctIndex = 4
    case "C":
      correctIndex = 3
    case "D":
      correctIndex = 2
    case "E":
      correctIndex = 8
    case "F":
      correctIndex = 7
    case "G":
      correctIndex = 6
  }

  return selectedNoteIndex === correctIndex
}

function MusicTheoryQuiz() {
  const [generatedNote, setGeneratedNote] = useState(generateRandomNote())
  const [notePlacedAt, setNotePlacedAt] = useState<number | null>(null)
  const [isChoiceRight, setIsChoiceRight] = useState<boolean | null>(null)

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
        <Box>
          <Text fontSize={22} color="gray.500" letterSpacing=".8px">
            Click / Tap a line or space to place a note.
          </Text>
        </Box>
        <Flex justifyContent="center" flexDir="column">
          <Staff
            notePlacedAt={notePlacedAt}
            onNotePlacement={(index) => setNotePlacedAt(index)}
          />
          <Flex justifyContent="center" gap={4}>
            <Button
              bg="#fcbd44"
              color="black"
              disabled={notePlacedAt === null}
              _hover={{ bg: "#fab228" }}
              onClick={() => {
                if (!notePlacedAt)
                  return;
                  
                setIsChoiceRight(isNoteCorrect(generatedNote, notePlacedAt));
              }}
            >
              Confirm
            </Button>
            {
              isChoiceRight !== null && (
                <Button>Next</Button>
              )
            }
          </Flex>
        </Flex>
        <Box>
          <Heading
            as="h2"
            fontSize={48}
            textAlign="center"
            color="#fcbd44"
            fontWeight="light"
          >
            Place a note in <strong>{generatedNote}</strong>
          </Heading>
        </Box>
      </Flex>
    </Page>
  )
}

export default MusicTheoryQuiz
