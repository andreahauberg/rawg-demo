import { HStack } from "@chakra-ui/react";

import type { Platform } from "../hooks/useGames";
import { PlatformSelector } from "./PlatformSelector";
import { SortSelector } from "./SortSelector";

interface GameControllsProps {
  selectedPlatform: Platform | null;
  sortOrder: string | null;
  onPlatformChange: (platform: Platform | null) => void;
  onSortChange: (sortOrder: string | null) => void;
}

export const GameControlls = ({
  selectedPlatform,
  sortOrder,
  onPlatformChange,
  onSortChange,
}: GameControllsProps) => {
  return (
    <HStack spacing={5}>
      <PlatformSelector
        selectedPlatform={selectedPlatform}
        onSelectPlatform={onPlatformChange}
      />
      <SortSelector sortOrder={sortOrder} onSelectSortOrder={onSortChange} />
    </HStack>
  );
};
