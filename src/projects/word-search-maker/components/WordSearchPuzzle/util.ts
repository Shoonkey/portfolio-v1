import Word from "../../shared/Word";

function getRandomLetter() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÇÁÉÍÓÚÃÕ";
  const randomIndex = Math.floor(Math.random() * letters.length);
  return letters[randomIndex];
}

function getBiggestWordLength(list: Word[]) {
  let wordSize = 0;
  for (const word of list)
    if (word.content.length > wordSize)
      wordSize = word.content.length;
  return wordSize;
}

export function getRandomGrid(width: number, height: number) {
  const items = [];

  for (let i = 0; i < width * height; i++)
    items.push(getRandomLetter());
  
  return items;
}