import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input } from "@chakra-ui/react";
import { FormEvent, useState } from "react";

import HideInPrintMode from "@/projects/portfolio/components/HideInPrintMode";
import useI18N from "@/projects/portfolio/hooks/useI18N";

interface AddWordFormProps {
  error?: string;
  onSubmit: (newWord: string) => void;
}

function AddWordForm({ error, onSubmit }: AddWordFormProps) {
  const i18n = useI18N("word-search-maker");

  const [newWord, setNewWord] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(newWord);
    setNewWord("");
  }

  return (
    <Flex as="form" mx="auto" gap={2} onSubmit={handleSubmit}>
      <FormControl isInvalid={Boolean(error)}>
        <FormLabel htmlFor="word"><Heading>{i18n.content.home.wordBank}</Heading></FormLabel>
        <HideInPrintMode>
          <Flex gap={2}>
            <Input name="word" value={newWord} onChange={(e) => setNewWord(e.target.value)} />
            <Button colorScheme="cyan" type="submit" px={6}>{i18n.content.home.addWord}</Button>
          </Flex>
          {error && <FormErrorMessage>{error}</FormErrorMessage>}
        </HideInPrintMode>
      </FormControl>
    </Flex>
  );
}

export default AddWordForm;
