import TrebleClefNote from "./shared/TrebleClefNote"

export function getRandomNote() {
  const notes: TrebleClefNote[] = ["A", "B", "C", "D", "E", "F", "G"]
  const randomIndex = Math.floor(Math.random() * notes.length)
  return notes[randomIndex]
}

export function getNoteFromIndex(index: number | null) {

  if (index === null || index === undefined)
    return

  const notesByIndex: TrebleClefNote[] = [
    "F",
    "E",
    "D",
    "C",
    "B",
    "A",
    "G",
    "F",
    "E",
  ]

  return notesByIndex[index]
}