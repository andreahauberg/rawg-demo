import {useGames} from "../hooks/useGames";
import {Text} from "@chakra-ui/react";


export const GameGrid = () => {
  const {games, error} = useGames();


  return (
    <>
      <div>{error && <Text>{error}</Text>}</div>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}
