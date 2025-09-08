import {useGames} from "../hooks/useGames";
import {SimpleGrid, Text} from "@chakra-ui/react";
import { GameCard } from "./GameCard";


export const GameGrid = () => {
  const {games, error} = useGames();


  return (
    <>
      <div>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={6} padding={2}>
          {games.map((game) => (
            <GameCard key={game.id} game={game}/>
          ))}
        </SimpleGrid>
      </div>
    </>
  );
}
