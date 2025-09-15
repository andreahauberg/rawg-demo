import {useGames} from "../hooks/useGames";
import {SimpleGrid, Text} from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";


export const GameGrid = () => {
  const {games, error, isLoading} = useGames();

  const skeletons = [...Array(10).keys()];


  return (
    <>
      <div>
        {error && <Text>{error}</Text>}
        {isLoading && <Text>Loading...</Text>}
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
          padding={2}>
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
}
