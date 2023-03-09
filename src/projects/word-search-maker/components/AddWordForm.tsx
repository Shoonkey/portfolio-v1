import useI18N from "@/projects/portfolio/hooks/useI18N";
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { FormEvent, useState } from "react";

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
        <FormLabel htmlFor="word">{i18n.content.home.wordBank}</FormLabel>
        <Flex gap={2}>
          <Input name="word" value={newWord} onChange={(e) => setNewWord(e.target.value)} />
          <Button colorScheme="cyan" type="submit" px={6}>{i18n.content.home.addWord}</Button>
        </Flex>
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FormControl>
    </Flex>
  );
}

export default AddWordForm;
