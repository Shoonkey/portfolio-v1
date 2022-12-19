import { useRouter } from "next/router"

import PlaceNoteQuiz from "../../../projects/music-theory/quizzes/PlaceNoteQuiz"
import Clef from "../../../projects/music-theory/shared/Clef";

function MusicTheoryProject() {
  const router = useRouter()
  let { clef } = router.query

  if (!clef || Array.isArray(clef) || !["treble", "bass"].includes(clef))
    clef = "treble";

  return <PlaceNoteQuiz clef={clef as Clef} />  
}

export default MusicTheoryProject