import { useEffect, useState } from "react";
import { apiClient } from "../sevices/api-client";

interface Game {
    id: number;
    name: string;
}

interface GameResponse{
    count: number;
    results: Game[];
}

export const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient.get<GameResponse>("/games")
        .then((res) => setGames(res.data.results))
        .catch((err) => {
            setError(err.message)
            console.log(err)
        })
    },[])

  return (
    <>
      <div>{error && <p>{error}</p>}</div>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}
