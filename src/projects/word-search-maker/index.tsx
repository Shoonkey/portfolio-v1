import { Box, Flex } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import Page from "../portfolio/components/Page";
import AddWordForm from "./components/AddWordForm";
import WordList from "./components/WordList";
import WordSearchPuzzle from "./components/WordSearchPuzzle";
import Word from "./shared/Word";

function WordSearchMaker() {
  const [wordList, setWordList] = useState<Word[]>([]);
  const [formError, setFormError] = useState("");

  const addNewWord = (word: string) => {
    setFormError("");

    if (word.includes(" ")) {
      setFormError("Word cannot contain spaces");
      return;
    }

    if (word.length < 3) {
      setFormError("Enter a word with at least 3 letters");
      return;
    }

    if (wordList.find((w) => w.content === word)) {
      setFormError("Word already in list");
      return;
    }

    setWordList([...wordList, { id: uuidv4(), content: word, added: false }]);
  };

  const removeWord = (index: number) => {
    const newList = [...wordList];
    newList.splice(index, 1);
    setWordList(newList);
  };

  return (
    <Page projectName="word-search-maker" title="home">
      <Flex flexGrow={1} alignItems="center" gap={6} flexDir={{ base: "column", md: "row" }} mx="auto">
        <Flex gap={4} maxW="400px" flexDir="column">
          <AddWordForm error={formError} onSubmit={(word) => addNewWord(word)} />
          <WordList list={wordList} onRemoveItem={(index) => removeWord(index)} />
        </Flex>
        <WordSearchPuzzle />
      </Flex>
    </Page>
  );
}

export default WordSearchMaker;
