import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Plus } from "phosphor-react";
import { FormEvent, useState } from "react";

import useI18N from "../../portfolio/hooks/useI18N";
import { saveCard } from "../util/card";

interface AddCardsDialogProps {
  open: boolean;
  onClose: () => void;
}

interface FormInput {
  label: string;
  description: string;
}

function AddCardsDialog({ open, onClose }: AddCardsDialogProps) {
  const i18n = useI18N("flash-cards");

  const [data, setData] = useState<FormInput>({
    label: "",
    description: "",
  });

  const [errors, setErrors] = useState<Partial<FormInput>>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const errors: Partial<FormInput> = {};

    if (!data.label)
      errors.label = i18n.content.addCardsDialog.form.label.error;
    if (!data.description)
      errors.description = i18n.content.addCardsDialog.form.description.error;

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    saveCard(data.label, data.description);
    setErrors({});
    setData({ label: "", description: "" });
  };

  return (
    <Modal
      isOpen={open}
      onClose={onClose}
      closeOnOverlayClick
      closeOnEsc
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>{i18n.content.addCardsDialog.title}</ModalHeader>
        <ModalBody mb={4}>
          <Flex flexDir="column" gap={4} as="form" onSubmit={handleSubmit}>
            <FormControl isInvalid={!!errors.label}>
              <FormLabel>
                {i18n.content.addCardsDialog.form.label.title}
              </FormLabel>
              <Input
                value={data.label}
                onChange={(e) => setData({ ...data, label: e.target.value })}
              />
              {errors.label ? (
                <FormErrorMessage>{errors.label}</FormErrorMessage>
              ) : (
                <FormHelperText>
                  {i18n.content.addCardsDialog.form.label.helperText}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl isInvalid={!!errors.description}>
              <FormLabel>
                {i18n.content.addCardsDialog.form.description.title}
              </FormLabel>
              <Textarea
                value={data.description}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
              />
              {errors.description ? (
                <FormErrorMessage>{errors.description}</FormErrorMessage>
              ) : (
                <FormHelperText>
                  {i18n.content.addCardsDialog.form.description.helperText}
                </FormHelperText>
              )}
            </FormControl>
            <Button
              type="submit"
              alignSelf="center"
              leftIcon={<Plus size={32} />}
              color="black"
              bg="pink.400"
              _hover={{ bg: "pink.500" }}
            >
              <Text as="span" pt={1}>
                {i18n.content.addCardsDialog.addButton}
              </Text>
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default AddCardsDialog;
