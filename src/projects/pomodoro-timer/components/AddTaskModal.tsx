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

interface AddTaskDialogProps {
  isOpen: boolean
  onAddTask: (description: string) => void
  onClose: () => void
}

function AddTaskDialog({ isOpen, onAddTask, onClose }: AddTaskDialogProps) {
  const [description, setDescription] = useState("")

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New task</ModalHeader>
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
            Add
          </Button>
          <Button onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AddTaskDialog
