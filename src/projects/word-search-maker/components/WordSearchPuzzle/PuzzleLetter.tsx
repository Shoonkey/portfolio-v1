import { GridItem, Input, Text } from "@chakra-ui/react";
import { MouseEventHandler, useEffect, useRef } from "react";

interface PuzzleLetter {
  beingEdited: boolean;
  isHighlighted: boolean;
  content: string;
  onInputClick: MouseEventHandler<HTMLInputElement>;
  onTextClick: () => void;
  onEdit: (newValue: string) => void;
  onBlur: () => void;
}

function PuzzleLetter({
  content,
  beingEdited,
  isHighlighted,
  onInputClick,
  onTextClick,
  onEdit,
  onBlur,
}: PuzzleLetter) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current || !beingEdited) return;

    inputRef.current.select();
  }, [inputRef, beingEdited]);

  return (
    <GridItem
      display="grid"
      placeItems="center"
      border="solid 1px white"
      w="100%"
      h="100%"
      cursor="pointer"
    >
      {beingEdited ? (
        <Input
          value={content}
          onChange={(e) => onEdit(e.target.value.toUpperCase())}
          onClick={onInputClick}
          onBlur={onBlur}
          maxLength={1}
          ref={inputRef}
        />
      ) : (
        <Text
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="100%"
          fontWeight={isHighlighted ? "bold" : "normal"}
          color={isHighlighted ? "yellow.400" : "gray.500"}
          onClick={onTextClick}
        >
          {content}
        </Text>
      )}
    </GridItem>
  );
}

export default PuzzleLetter;
