import { Flex } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import Page from "../portfolio/components/Page";
import useI18N from "../portfolio/hooks/useI18N";

import AddWordForm from "./components/AddWordForm";
import WordList from "./components/WordList";
import WordSearchPuzzle from "./components/WordSearchPuzzle";
import Word from "./shared/Word";

type NewWordErrorType =
  | "max-words"
  | "contains-space"
  | "too-small"
  | "already-in-list";
 
function WordSearchMaker() {
  const i18n = useI18N("word-search-maker");

  const [wordList, setWordList] = useState<Word[]>([]);
  const [formErrorType, setFormErrorType] = useState<NewWordErrorType | null>(null);

  const addNewWord = (word: string) => {
    setFormErrorType(null);

    if (wordList.length >= 15) {
      setFormErrorType("max-words");
      return;
    }

    if (word.includes(" ")) {
      setFormErrorType("contains-space");
      return;
    }

    if (word.length < 3) {
      setFormErrorType("too-small");
      return;
    }

    if (wordList.find((w) => w.content === word)) {
      setFormErrorType("already-in-list");
      return;
    }

    setWordList([...wordList, { id: uuidv4(), content: word }]);
  };

  const removeWord = (index: number) => {
    const newList = [...wordList];
    newList.splice(index, 1);
    setWordList(newList);
  };

  return (
    <Page projectName="word-search-maker" title="home">
      <Flex
        flexGrow={1}
        alignItems="center"
        gap={6}
        flexDir={{ base: "column", md: "row" }}
        mx="auto"
      >
        <Flex gap={4} maxW="400px" flexDir="column">
          <AddWordForm
            error={formErrorType ? i18n.content.home.newWordErrors[formErrorType] : null}
            onSubmit={(word) => addNewWord(word)}
          />
          <WordList
            list={wordList}
            onRemoveItem={(index) => removeWord(index)}
          />
        </Flex>
        <WordSearchPuzzle />
      </Flex>
    </Page>
  );
}

export default WordSearchMaker;
