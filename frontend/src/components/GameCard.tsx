import { Card, CardBody, Heading, Image, HStack, Skeleton} from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import {PlatformIconsList } from "./PlatformIconsList";
import { CriticScore } from "./CriticScore";
import { getCroppedImageUrl } from "../services/image-url";
import { useState } from "react";



interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Skeleton height="200px" isLoaded={imageLoaded}>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          height="200px"
          objectFit="cover"
          onLoad={() => setImageLoaded(true)}
        />
      </Skeleton>
      <HStack justify={"space-between"} padding={2}>
        <PlatformIconsList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic} />
      </HStack>
      <CardBody>
        <Heading
          fontSize={{ base: "lg", md: "2xl" }}
          noOfLines={2}
          // lineHeight="short"
          minH="3.5rem">
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};
