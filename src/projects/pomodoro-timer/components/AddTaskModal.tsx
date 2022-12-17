import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  Textarea,
} from "@chakra-ui/react"
import { useState } from "react"

import useI18N from "../../portfolio/hooks/useI18N"

interface AddTaskDialogProps {
  isOpen: boolean
  onAddTask: (description: string) => void
  onClose: () => void
}

function AddTaskDialog({ isOpen, onAddTask, onClose }: AddTaskDialogProps) {
  const i18n = useI18N("pomodoro-timer")

  const [description, setDescription] = useState("")

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{i18n.content.home.taskModal.newTask}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex as="form">
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Flex>
        </ModalBody>
        <ModalFooter gap={3}>
          <Button
            colorScheme="orange"
            onClick={() => {
              onAddTask(description)
              setDescription("")
              onClose()
            }}
          >
            {i18n.content.home.taskModal.add}
          </Button>
          <Button onClick={onClose}>{i18n.content.home.taskModal.cancel}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AddTaskDialog
