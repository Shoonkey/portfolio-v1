import { useMemo } from "react"

import MusicTheoryQuizList from "@/projects/music-theory"
import QuizInfo from "@/projects/music-theory/shared/QuizInfo"
import useI18N from "@/projects/portfolio/hooks/useI18N"

function MusicTheoryProject() {
  const i18n = useI18N("music-theory-quiz")

  const quizzes: QuizInfo[] = useMemo(() => ([
    {
      name: i18n.content.home.quiz.placeNoteTreble,
      href: "/music-theory/quiz/place-note?clef=treble",
    },
    {
      name: i18n.content.home.quiz.placeNoteBass,
      href: "/music-theory/quiz/place-note?clef=bass",
    },
    {
      name: i18n.content.home.quiz.circleOfFifths,
      href: "/music-theory/quiz/circle-of-fifths"
    }
  ]), [i18n])

  return <MusicTheoryQuizList quizzes={quizzes} />
}

export default MusicTheoryProject
