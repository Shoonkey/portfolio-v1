import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import { Info, PencilSimple, TrashSimple } from "@phosphor-icons/react";
import { useState } from "react";

import useI18N from "../../portfolio/hooks/useI18N";
import CardData from "../shared/CardData";
import CardDialogData from "../shared/CardDialogData";
import { getCards } from "../util/card";
import CardDialog from "./CardDialog";
import DeleteCardDialog from "./DeleteCardDialog";

interface EditCardsDialogProps {
  open: boolean;
  onClose: () => void;
}

function CardTableDialog({ open, onClose }: EditCardsDialogProps) {
  const i18n = useI18N("flash-cards");

  const [cardDialogData, setCardDialogData] = useState<CardDialogData>({
    open: false,
    mode: "view",
  });

  const [deleteCardDialogData, setDeleteCardDialogData] = useState<{
    open: boolean;
    cardId: string | null;
  }>({
    open: false,
    cardId: null,
  });

  return (
    <>
      <CardDialog
        open={cardDialogData.open}
        mode={cardDialogData.mode}
        prefillCard={cardDialogData.prefillCard}
        onClose={() => setCardDialogData({ ...cardDialogData, open: false })}
      />
      <DeleteCardDialog
        open={deleteCardDialogData.open}
        onClose={() => setDeleteCardDialogData({ open: false, cardId: null })}
        cardId={deleteCardDialogData.cardId}
      />
      <Modal
        isOpen={open}
        onClose={onClose}
        closeOnOverlayClick
        closeOnEsc
        isCentered
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent maxH="80vh" overflowY="auto">
          <ModalCloseButton />
          <ModalHeader>{i18n.content.cardTableDialog.title}</ModalHeader>
          <ModalBody mb={4} display="flex" flexDir="column">
            <Button
              alignSelf="end"
              colorScheme="cyan"
              onClick={() =>
                setCardDialogData({
                  mode: "new",
                  open: true,
                })
              }
            >
              <Text as="span" pt={1}>
                {i18n.content.cardTableDialog.addButton}
              </Text>
            </Button>
            <TableContainer>
              <Table variant="simple" colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th>{i18n.content.cardTableDialog.table.label}</Th>
                    <Th>{i18n.content.cardTableDialog.table.actions}</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {getCards().map((card) => (
                    <Tr key={card.id}>
                      <Td>{card.frontText}</Td>
                      <Td display="flex" gap={2}>
                        <Tooltip label={i18n.content.cardDialog.title.view}>
                          <IconButton
                            color="purple.400"
                            variant="transparent"
                            aria-label={i18n.content.cardDialog.title.view}
                            onClick={() =>
                              setCardDialogData({
                                open: true,
                                mode: "view",
                                prefillCard: card as CardData,
                              })
                            }
                          >
                            <Info size={32} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip label={i18n.content.cardDialog.title.edit}>
                          <IconButton
                            color="pink.400"
                            variant="transparent"
                            aria-label={i18n.content.cardDialog.title.edit}
                            onClick={() =>
                              setCardDialogData({
                                open: true,
                                mode: "edit",
                                prefillCard: card,
                              })
                            }
                          >
                            <PencilSimple size={32} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip label={i18n.content.deleteDialog.title}>
                          <IconButton
                            color="red.400"
                            variant="transparent"
                            aria-label={i18n.content.deleteDialog.title}
                            onClick={() =>
                              setDeleteCardDialogData({
                                open: true,
                                cardId: card.id,
                              })
                            }
                          >
                            <TrashSimple size={32} />
                          </IconButton>
                        </Tooltip>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CardTableDialog;
