import { Badge } from "@chakra-ui/react";


interface CriticScoreProps {
    score: number;
}


export const CriticScore = ({score}: CriticScoreProps) => {

    const color = score > 75 ? "green" : score > 50 ? "yellow" : "red";

  return (
    <Badge border="1px solid green" colorScheme={color} fontSize="14px" paddingX={2} borderRadius={4}>
      {score}
    </Badge>
  )
}
