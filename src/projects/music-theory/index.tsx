import { Center, Flex, Heading } from "@chakra-ui/react"
import Link from "next/link"
import { MusicNoteSimple } from "phosphor-react"

import Page from "../portfolio/components/Page"
import useI18N from "../portfolio/hooks/useI18N"

import QuizInfo from "./shared/QuizInfo"

interface MusicTheoryQuizListProps {
  quizzes: QuizInfo[]
}

function MusicTheoryQuizList({ quizzes }: MusicTheoryQuizListProps) {
  const i18n = useI18N("music-theory-quiz")

  return (
    <Page projectName="music-theory-quiz" title="home">
      <Center flexDir="column" flexGrow={1}>
        <Flex alignItems="center" flexDir="column" mb={12}>
          <MusicNoteSimple size={128} color="#efae32" />
          <Heading mt={4} as="h2" fontFamily="Arvo">
            {i18n.content.home.chooseQuiz}
          </Heading>
        </Flex>
        <Flex flexWrap="wrap" justifyContent="center" alignItems="center" gap={4}>
          {quizzes.map((quiz, index) => (
            <Link href={quiz.href} key={`quiz-${index}`}>
              <Heading
                as="h4"
                size="lg"
                bg="#2b2b2b"
                px={10}
                py={6}
                maxW="300px"
                textAlign="center"
                borderRadius="16px"
                transition="all .3s"
                _hover={{
                  borderRadius: "32px",
                  bg: "#efae32",
                  color: "#2b2b2b",
                }}
              >
                {quiz.name}
              </Heading>
            </Link>
          ))}
        </Flex>
      </Center>
    </Page>
  )
}

export default MusicTheoryQuizList
