import { useState } from "react";

import { Box, Flex } from "@chakra-ui/react";

import type { Platform } from "../hooks/useGames";
import { GameControlls } from "./GameControlls";
import { GameHeading } from "./GameHeading";
import { GameViewOptions } from "./GameViewOptions";

interface GameHeaderProps {
  selectedPlatform: Platform | null;
  sortOrder: string | null;
  onPlatformChange: (platform: Platform | null) => void;
  onSortChange: (sortOrder: string | null) => void;
  onViewChange?: (view: string) => void;
}

export const GameHeader = ({
  selectedPlatform,
  sortOrder,
  onPlatformChange,
  onSortChange,
  onViewChange,
}: GameHeaderProps) => {
  const [view, setView] = useState<string>("grid");

  const handleViewChange = (value: string) => {
    setView(value);
    onViewChange?.(value);
  };

  return (
    <Box mb={6} px={2}>
      <GameHeading />
      <Flex justify="space-between" align="center">
        <GameControlls
          selectedPlatform={selectedPlatform}
          sortOrder={sortOrder}
          onPlatformChange={onPlatformChange}
          onSortChange={onSortChange}
        />
        <GameViewOptions view={view} onViewChange={handleViewChange} />
      </Flex>
    </Box>
  );
};
