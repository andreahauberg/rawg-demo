import { Heading, Text } from "@chakra-ui/react";

export const GameHeading = () => {
  return (
    <>

      {/* Title + Subtitle */}
      <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" mb={2}>
        New and trending
      </Heading>
      <Text color="gray.400" fontSize={{ base: "sm", md: "md" }} mb={4}>
        Based on player counts and release date
      </Text>
    </>
    );
    }