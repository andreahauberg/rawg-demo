import { SimpleGrid, Text } from "@chakra-ui/react";

import type { GameQuery } from "../App";
import { useGames } from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardContainer } from "./GameCardContainer";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameHeader } from "./GameHeader";

interface Props {
  gameQuery: GameQuery;
  onPlatformChange: (platform: GameQuery["platform"]) => void;
  onSortChange: (sortOrder: GameQuery["sortOrder"]) => void;
}

export const GameGrid = ({
  gameQuery,
  onPlatformChange,
  onSortChange,
}: Props) => {
  const { games, error, isLoading } = useGames(gameQuery);
  const skeletons = [...Array(10).keys()];

  return (
    <>
      <GameHeader
        selectedPlatform={gameQuery.platform}
        sortOrder={gameQuery.sortOrder}
        onPlatformChange={onPlatformChange}
        onSortChange={onSortChange}
        onViewChange={(view) => console.log("View changed:", view)}
      />
      <div>
        {error && <Text>{error}</Text>}
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
          padding={2}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {games.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      </div>
    </>
  );
};
