import { Card, CardBody, Skeleton, SkeletonText, HStack } from '@chakra-ui/react'


export const GameCardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow="hidden" w="100%">
      <Skeleton height="200px" /> 
      <HStack justify="space-between" padding={2}>
        <Skeleton height="20px" width="80px" /> 
        <Skeleton height="20px" width="30px" /> 
      </HStack>
      <CardBody>
        <SkeletonText noOfLines={2} spacing="2" skeletonHeight="5" />
      </CardBody>
    </Card>
  );
}
