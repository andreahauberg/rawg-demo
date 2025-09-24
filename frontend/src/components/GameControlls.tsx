import { Text, HStack, Select } from "@chakra-ui/react";

interface GameControllsProps {
  sort: string;
  onSortChange: (value: string) => void;
}

export const GameControlls = ({ sort, onSortChange }: GameControllsProps) => {
  return (
    <HStack spacing={2}>
      <Text fontSize="sm" color="gray.300">
        Order by:
      </Text>
      <Select
        size="sm"
        variant="filled"
        value={sort}
        onChange={(e) => onSortChange(e.target.value)}
        bg="gray.700"
        borderRadius="md"
        color="white"
        _hover={{ bg: "gray.600" }}>
        <option value="relevance">Relevance</option>
        <option value="release-date">Release date</option>
        <option value="rating">Rating</option>
        <option value="name">Name</option>
      </Select>
    </HStack>
  );
};
