import type { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface GameCardContainerProps {
  children: ReactNode;
}

export const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box overflow="hidden" borderRadius={10} w="100%">
      {children}
    </Box>
  );
};
