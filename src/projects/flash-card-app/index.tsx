import { Center, Flex, Heading, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Page from "../portfolio/components/Page";
import useI18N from "../portfolio/hooks/useI18N";

import CardData from "./shared/CardData";
import ViewStage from "./shared/ViewStage";

import AddCardsButton from "./components/AddCardsButton";
import AddCardsDialog from "./components/AddCardsDialog";
import FlashCard from "./components/FlashCard";
import { drawFirstDeck } from "./util/card";
import {
  getStageCardPositions,
  getNextStage,
  getStageCards,
} from "./util/stage";

interface AppMetadata {
  playable: boolean;
  stage: ViewStage;
  cards: (CardData | null)[];
}

function FlashCardApp() {
  const i18n = useI18N("flash-cards");

  const [addCardsDialogOpen, setAddCardsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [metadata, setMetadata] = useState<AppMetadata>({
    playable: false,
    stage: "none-left",
    cards: [],
  });

  useEffect(() => {
    const deck = drawFirstDeck();
    setMetadata({ ...metadata, playable: deck.length >= 5, cards: deck });
    setLoading(false);
  }, []);

  const cardPositions = getStageCardPositions(metadata.stage);

  if (loading)
    return (
      <Page projectName="flash-cards" title="home">
        <Center flexGrow={1}>
          <Spinner />
        </Center>
      </Page>
    );

  return (
    <Page
      projectName="flash-cards"
      title="home"
      containerProps={{ overflowX: "hidden" }}
    >
      <AddCardsButton onClick={() => setAddCardsDialogOpen(true)} />
      <AddCardsDialog
        open={addCardsDialogOpen}
        onClose={() => {
          const deck = drawFirstDeck();

          if (!metadata.playable && deck.length > 0)
            setMetadata({ ...metadata, playable: true, cards: deck });

          setAddCardsDialogOpen(false);
        }}
      />
      <Heading
        as="h2"
        size="md"
        ml={{ base: 0, md: 24 }}
        mt={{ base: 4, md: 0 }}
        textAlign={{ base: "center", md: "left" }}
        color="gray.500"
      >
        {i18n.content.home.dataNotice}
      </Heading>
      <Heading
        as="h2"
        size="md"
        ml={{ base: 0, md: 24 }}
        mt={2}
        textAlign={{ base: "center", md: "left" }}
        color="gray.500"
      >
        {i18n.content.home.explanation}
      </Heading>
      <Flex flexGrow={1} position="relative">
        {cardPositions.map((position, index) => {
          return (
            <FlashCard
              key={metadata.cards[index]?.id || index}
              position={position}
              frontText={
                metadata.cards[index]?.frontText ||
                i18n.content.home.emptyCardPlaceholder.label
              }
              backText={
                metadata.cards[index]?.backText ||
                i18n.content.home.emptyCardPlaceholder.description
              }
              onClick={() => {
                if (!metadata.playable) return;
                const nextStage = getNextStage(metadata.stage, position);
                const stageCards = getStageCards(
                  metadata.stage,
                  position,
                  metadata.cards as CardData[]
                );

                setMetadata({
                  ...metadata,
                  stage: nextStage,
                  cards: stageCards,
                });
              }}
            />
          );
        })}
      </Flex>
    </Page>
  );
}

export default FlashCardApp;
