import { Button, Tooltip } from "@chakra-ui/react";
import { Plus } from "phosphor-react";

interface AddCardButtonProps {
  onClick: () => void;
}

function AddCardsButton({ onClick }: AddCardButtonProps) {
  return (
    <Tooltip placement="left" label="Add cards">
      <Button
        position="absolute"
        bottom={4}
        right={4}
        bg="pink.400"
        _hover={{ bg: "pink.500" }}
        color="black"
        w="64px"
        h="64px"
        borderRadius="50%"
        aria-label="Add cards"
        onClick={onClick}
      >
        <Plus size={32} />
      </Button>
    </Tooltip>
  );
}
export default AddCardsButton;
