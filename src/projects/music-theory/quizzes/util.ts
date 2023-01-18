import Clef from "../shared/Clef"
import Note from "../shared/Note"

export function getRandomNote() {
  const notes: Note[] = ["A", "B", "C", "D", "E", "F", "G"]
  const randomIndex = Math.floor(Math.random() * notes.length)

  return notes[randomIndex]
}

export function getNoteFromIndex(clef: Clef, index: number | null) {
  if (index === null || index === undefined) return

  const notesByIndex: { treble: Note[]; bass: Note[] } = {
    treble: ["F", "E", "D", "C", "B", "A", "G", "F", "E"],
    bass: ["A", "G", "F", "E", "D", "C", "B", "A", "G"]
  }

  return notesByIndex[clef][index]
}
