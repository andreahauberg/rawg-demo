import { HStack, List, ListItem, Skeleton } from "@chakra-ui/react";

export const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem>
        <HStack spacing={4} paddingX={5} paddingY={2}>
          <Skeleton boxSize="32px" borderRadius={8} /> 
          <Skeleton height="20px" width="100px" />
        </HStack>
      </ListItem>
    </List>
  );
}
