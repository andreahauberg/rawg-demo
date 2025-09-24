import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";

import { GameHeading } from "./GameHeading";
import { GameControlls } from "./GameControlls";
import { GameViewOptions } from "./GameViewOptions";

// Define the props type (optional callbacks for parent)
interface GameHeaderProps {
  onSortChange?: (value: string) => void;
  onViewChange?: (value: string) => void;
}

export const GameHeader = ({ onSortChange, onViewChange }: GameHeaderProps) => {
  const [sort, setSort] = useState<string>("relevance");
  const [view, setView] = useState<string>("grid");

  const handleSortChange = (value: string) => {
    setSort(value);
    onSortChange?.(value);
  };

  const handleViewChange = (value: string) => {
    setView(value);
    onViewChange?.(value);
  };

  return (
    <Box mb={6} px={2}>
      <GameHeading />
      <Flex justify="space-between" align="center">
        <GameControlls sort={sort} onSortChange={handleSortChange} />
        <GameViewOptions view={view} onViewChange={handleViewChange} />
      </Flex>
    </Box>
  );
};
