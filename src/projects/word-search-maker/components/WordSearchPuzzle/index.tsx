import { Button, Flex, Grid, Heading, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import DOMToImage from "dom-to-image";

import useI18N from "@/projects/portfolio/hooks/useI18N";
import PuzzleLetter from "./PuzzleLetter";
import { getRandomGrid } from "./util";

type EditingMode = "horizontal" | "vertical" | "diagonal";

interface EditingMetadata {
  currentMode: EditingMode;
  initialCellIndex: number;
  currentCellIndex: number;
}

function WordSearchPuzzle() {
  const i18n = useI18N("word-search-maker");

  const puzzleRef = useRef<HTMLDivElement>(null);

  const [gridItems, setGridItems] = useState<string[] | null>(null);
  const [editing, setEditing] = useState<EditingMetadata | null>(null);
  const [editedCells, setEditedCells] = useState<number[]>([]);

  const updateEditingMode = (
    editing: EditingMetadata | null,
    clickedCellIndex: number
  ) => {
    let nextMode: EditingMode;

    switch (editing?.currentMode) {
      case "horizontal":
        nextMode = "vertical";
        break;
      case "vertical":
        nextMode = "diagonal";
        break;
      case "diagonal":
      default:
        nextMode = "horizontal";
    }

    setEditing({
      currentMode: nextMode,
      initialCellIndex: clickedCellIndex,
      currentCellIndex: clickedCellIndex,
    });
  };

  const toggleEditingMode = (index: number | false) => {
    setEditing(
      index
        ? {
            currentMode: "horizontal",
            initialCellIndex: index,
            currentCellIndex: index,
          }
        : null
    );
  };

  const updateGrid = (index: number, newLetter: string) => {
    if (!gridItems) return;

    const newGrid = [...gridItems];
    newGrid.splice(index, 1, newLetter);
    setGridItems(newGrid);

    if (!editedCells.includes(index)) setEditedCells([...editedCells, index]);
  };

  const updateCurrentCellIndex = () => {
    if (!editing) return;

    const { currentMode, currentCellIndex } = editing;

    // If it is not at the last possible position in the mode, move to next.
    // If it is, get out of the editing mode
    if (currentMode === "horizontal") {
      const row = Math.floor(currentCellIndex / 10);
      if (currentCellIndex + 1 < 10 * (row + 1))
        setEditing({ ...editing, currentCellIndex: currentCellIndex + 1 });
      else setEditing(null);
    } else if (currentMode === "vertical") {
      if (currentCellIndex + 10 < 10 * 10)
        setEditing({ ...editing, currentCellIndex: currentCellIndex + 10 });
      else setEditing(null);
    } else {
      // currentMode = "diagonal"
      if ((currentCellIndex + 1) % 10 !== 0)
        setEditing({ ...editing, currentCellIndex: currentCellIndex + 11 });
      else setEditing(null);
    }
  };

  const removeCellHighlight = (index: number) => {
    const cellPosition = editedCells.findIndex(
      (cellIndex) => cellIndex === index
    );
    const newList = [...editedCells];
    newList.splice(cellPosition, 1);
    setEditedCells(newList);
  };

  const downloadPuzzle = async () => {
    const puzzle = puzzleRef.current;

    if (!puzzle)
      return;

    try {
      const data = await DOMToImage.toPng(puzzle);
      const link = document.createElement("a");
      link.download = "puzzle.png";
      link.href = data;
      link.click();
      console.log("test");
    } catch (e) {
      console.error("Failed to generate file. Error:", e);
    }
  };

  useEffect(() => setGridItems(getRandomGrid(10, 10)), []);
  useEffect(() => console.log("Ref updated!", puzzleRef.current), [puzzleRef])

  return (
    <Flex
      flexDir="column"
      mx="auto"
      gap={4}
      borderLeft={{ base: "none", md: "solid 1px white" }}
      borderTop={{ base: "solid 1px white", md: "none" }}
      pl={{ base: 0, md: 6 }}
      pt={{ base: 6, md: 0 }}
      mb={4}
    >
      <Text>{i18n.content.home.editingModeExplanation}</Text>
      <Text>{i18n.content.home.highlightsExplanation}</Text>
      <Flex
        gap={4}
        justifyContent="space-between"
        alignItems="center"
        flexDir={{ base: "column", md: "row" }}
      >
        <Heading as="h2" size="md">
          {i18n.content.home.state}:{" "}
          {editing
            ? i18n.content.home.editing[editing.currentMode]
            : i18n.content.home.editing.none}
        </Heading>
        <Button colorScheme="cyan" onClick={() => setEditedCells([])}>
          {i18n.content.home.clearEditHistory}
        </Button>
      </Flex>
      <Flex flexDir="column" flexGrow={1} ref={puzzleRef} bg="gray.800">
        {gridItems ? (
          <Grid
            gridTemplateRows={`repeat(10, 1fr)`}
            gridTemplateColumns={`repeat(10, 32px)`}
            px={4}
            fontFamily="monospace"
            fontSize={24}
            textAlign="center"
            placeItems="center"
            mx="auto"
            gap={2}
          >
            {gridItems.map((item, index) => {
              const isHighlighted = editedCells.includes(index);

              return (
                <PuzzleLetter
                  key={`letter-${index}`}
                  content={item}
                  onInputClick={(e) => {
                    (e.target as HTMLInputElement).select();
                    updateEditingMode(editing, index);
                  }}
                  onTextClick={() => {
                    if (isHighlighted) removeCellHighlight(index);
                    else updateEditingMode(editing, index);
                  }}
                  onEdit={(newValue) => {
                    updateGrid(index, newValue);
                    updateCurrentCellIndex();
                  }}
                  onBlur={() => toggleEditingMode(false)}
                  beingEdited={editing?.currentCellIndex === index}
                  isHighlighted={isHighlighted}
                />
              );
            })}
          </Grid>
        ) : (
          <Spinner />
        )}
      </Flex>
      <Button alignSelf="center" colorScheme="orange" onClick={() => downloadPuzzle()}>
        Download as PNG
      </Button>
    </Flex>
  );
}

export default WordSearchPuzzle;
