import useI18N from "@/projects/portfolio/hooks/useI18N";
import {
  Button,
  Heading,
  ListItem,
  Tooltip,
  UnorderedList,
  Text,
} from "@chakra-ui/react";
import { Trash } from "phosphor-react";

import Word from "../shared/Word";

interface WordListProps {
  list: Word[];
  onRemoveItem: (index: number) => void;
}

function WordList({ list, onRemoveItem }: WordListProps) {
  const i18n = useI18N("word-search-maker");

  if (list.length === 0)
    return (
      <Text
        textAlign="center"
        color="gray.500"
        dangerouslySetInnerHTML={{ __html: i18n.content.home.noWordsAdded }}
      />
    );

  return (
    <UnorderedList
      listStyleType="none"
      minW="400px"
      display="flex"
      flexDir="column"
      marginInlineStart={0}
      gap={2}
    >
      {list.map((word, index) => (
        <ListItem
          key={word.id}
          display="flex"
          alignItems="center"
          bg="gray.700"
          pl={6}
          py={2}
          borderRadius="16px"
        >
          <Heading
            as="h2"
            size="md"
            flexGrow={1}
            color="yellow.400"
            letterSpacing="1px"
          >
            {word.content}
          </Heading>
          <Tooltip placement="top" label="Remove word">
            <Button
              variant="transparent"
              aria-label="Remove word"
              color="red.400"
              onClick={() => onRemoveItem(index)}
            >
              <Trash size={32} />
            </Button>
          </Tooltip>
        </ListItem>
      ))}
    </UnorderedList>
  );
}

export default WordList;
