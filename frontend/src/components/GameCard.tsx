import { Card, CardBody, Heading, Image, HStack} from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import {PlatformIconsList } from "./PlatformIconsList";
import { CriticScore } from "./CriticScore";



interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {


  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} alt={game.name} />
      <HStack justify={"space-between"} padding={2}>
        <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)}/>
        <CriticScore score={game.metacritic}/>
      </HStack>
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>

      </CardBody>
    </Card>
  );
};
