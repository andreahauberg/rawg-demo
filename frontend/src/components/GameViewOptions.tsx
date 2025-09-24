import { HStack, IconButton, Text } from "@chakra-ui/react";
import { BsGrid3X3GapFill, BsViewStacked } from "react-icons/bs";

interface GameViewOptionsProps {
  view: string;
  onViewChange: (value: string) => void;
}

export const GameViewOptions = ({
  view,
  onViewChange,
}: GameViewOptionsProps) => {
  return (
    <HStack spacing={2}>
      <Text fontSize="sm" color="gray.300">
        Display options:
      </Text>
      <HStack>
        <IconButton
          aria-label="Grid view"
          icon={<BsGrid3X3GapFill />}
          size="sm"
          bg={view === "grid" ? "blue.600" : "gray.700"}
          color="white"
          _hover={{ bg: "gray.600" }}
          borderRadius="md"
          onClick={() => onViewChange("grid")}
        />
        <IconButton
          aria-label="List view"
          icon={<BsViewStacked />}
          size="sm"
          bg={view === "list" ? "blue.600" : "gray.700"}
          color="white"
          _hover={{ bg: "gray.600" }}
          borderRadius="md"
          onClick={() => onViewChange("list")}
        />
      </HStack>
    </HStack>
  );
};
