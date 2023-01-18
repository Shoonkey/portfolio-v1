import { FormEventHandler, useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Spinner,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import Page from "../../portfolio/components/Page";
import useI18N from "../../portfolio/hooks/useI18N";

import { getRandomPiece } from "./util";
import CircleOfFifths from "../components/CircleOfFifths";

interface QuizData {
  missingPiece: string;
  userAnswer: string;
  confirmed: boolean;
}

function CircleOfFifthsQuiz() {
  const i18n = useI18N("music-theory-quiz");

  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const scale = useBreakpointValue({ base: .5, sm: .75, md: 1 })

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    if (!quizData) return;

    setQuizData({ ...quizData, confirmed: true });
  };

  // Note: state is set at first through a React effect to prevent Next's hydration error
  // (https://nextjs.org/docs/messages/react-hydration-error)
  useEffect(() => {
    const missingPieceType = Math.round(Math.random()) === 1 ? "scale" : "note";

    setQuizData({
      missingPiece: getRandomPiece({
        type: missingPieceType,
        includeAccidental: missingPieceType === "note",
      }),
      userAnswer: "",
      confirmed: false,
    });
  }, []);

  if (!quizData)
    return (
      <Page projectName="music-theory-quiz" title="loading">
        <Flex flexGrow={1} justifyContent="center" alignItems="center">
          <Spinner />
        </Flex>
      </Page>
    );

  return (
    <Page projectName="music-theory-quiz" title="circleOfFifths">
      <Flex
        flexDir="column"
        alignItems="center"
        flexGrow={1}
        py={4}
        px={6}
        gap={6}
      >
        <CircleOfFifths scale={scale} missingPiece={quizData.missingPiece} />
        <Heading as="h2">
          {i18n.content.circleOfFifths.exerciseDescription}
        </Heading>
        <Flex as="form" onSubmit={handleSubmit} gap={2}>
          <Input
            value={quizData.userAnswer}
            fontSize="32px"
            w="256px"
            h="64px"
            onChange={(e) =>
              setQuizData({ ...quizData, userAnswer: e.target.value })
            }
          />
          <Button
            disabled={quizData.userAnswer === ""}
            h="64px"
            colorScheme="cyan"
            type="submit"
          >
            {i18n.content.circleOfFifths.answerButton}
          </Button>
        </Flex>
        {quizData.confirmed && (
          <>
            <Text
              color={
                quizData.missingPiece.toLowerCase() === quizData.userAnswer.toLowerCase()
                  ? "green.400"
                  : "red.400"
              }
            >
              {quizData.missingPiece.toLowerCase() === quizData.userAnswer.toLowerCase()
                ? i18n.content.circleOfFifths.result.correct
                : i18n.content.circleOfFifths.result.incorrect +
                  " " +
                  quizData.missingPiece}
            </Text>
            <Button
              onClick={() => {
                const missingPieceType =
                  Math.round(Math.random()) === 1 ? "scale" : "note";

                setQuizData({
                  missingPiece: getRandomPiece({
                    type: missingPieceType,
                    includeAccidental: missingPieceType === "note",
                  }),
                  userAnswer: "",
                  confirmed: false,
                });
              }}
            >
              {i18n.content.circleOfFifths.next}
            </Button>
          </>
        )}
      </Flex>
    </Page>
  );
}

export default CircleOfFifthsQuiz;
