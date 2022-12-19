import Clef from "../shared/Clef"
import Note from "../shared/Note"

export function getRandomNote(clef: Clef) {
  const notes: { treble: Note[]; bass: Note[] } = {
    treble: ["A", "B", "C", "D", "E", "F", "G"],
    bass: [], // TODO
  }

  const randomIndex = Math.floor(Math.random() * notes[clef].length)
  return notes[clef][randomIndex]
}

export function getNoteFromIndex(clef: Clef, index: number | null) {
  if (index === null || index === undefined) return

  const notesByIndex: { treble: Note[]; bass: Note[] } = {
    treble: ["F", "E", "D", "C", "B", "A", "G", "F", "E"],
    bass: [], // TODO
  }

  return notesByIndex[clef][index]
}
