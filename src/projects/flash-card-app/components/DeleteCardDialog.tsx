import {
  Button,
  ButtonGroup,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import useI18N from "../../portfolio/hooks/useI18N";
import { deleteCard } from "../util/card";

interface DeleteCardDialogProps {
  open: boolean;
  onClose: () => void;
  cardId: string | null;
}

function DeleteCardDialog({ open, onClose, cardId }: DeleteCardDialogProps) {
  const i18n = useI18N("flash-cards");

  if (!cardId) return null;

  return (
    <Modal isOpen={open} onClose={onClose} isCentered size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>
          <Heading as="h1" size="md">
            {i18n.content.deleteDialog.header}
          </Heading>
        </ModalHeader>
        <ModalBody display="flex" flexDir="column" gap={4}>
          <ButtonGroup alignSelf="center" mb={4}>
            <Button
              onClick={() => {
                deleteCard(cardId);
                onClose();
              }}
              colorScheme="red"
            >
              {i18n.content.deleteDialog.yesButton}
            </Button>
            <Button onClick={onClose}>
              {i18n.content.deleteDialog.noButton}
            </Button>
          </ButtonGroup>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default DeleteCardDialog;
