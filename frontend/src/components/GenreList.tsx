import {useGenres, type Genre } from "../hooks/useGenres";
import {CustomList} from "./reusableComponents/CustomList";

interface Props {
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

export const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  return (
    <CustomList
      onSelectItem={onSelectGenre}
      selectedItem={selectedGenre}
      title="Genres"
      useDataHook={useGenres}
    />
  );
};



// import { useGenres } from "../hooks/useGenres";
// import { getCroppedImageUrl } from "../sevices/image-url";
// import { HStack, List, ListItem, Image, Text, Skeleton } from "@chakra-ui/react";
// import { useState } from "react";
// import { GenreListSkeleton } from "./GenreListSkeleton";
// export const GenreList = () => {
//   const { data: genres, error, isLoading } = useGenres();
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const skeletons = [...Array(19).keys()];
//   return (
//     <>
//     {error && <Text>{error}</Text>}
//     {isLoading &&
//       skeletons.map((skeleton) => (
//         <GenreListSkeleton key={skeleton} />
//       ))
//     }
//     <List>
//       {genres.map((genre) => (
//         <ListItem key={genre.id}>
//         <HStack spacing={4} paddingX={5} paddingY={2}>
//                 <Skeleton boxSize="32px" isLoaded={imageLoaded}>
//                   <Image
//                     src={getCroppedImageUrl(genre.image_background)}
//                     alt={genre.name}
//                     boxSize="32px"
//                     minWidth="32px"
//                     borderRadius={8}
//                     objectFit="cover"
//                     onLoad={() => setImageLoaded(true)}
//                   />
//                 </Skeleton>
//           <Text>{genre.name}</Text>
//         </HStack>
//         </ListItem>
//       ))}
//     </List>
//     </>
//   );
// };
// import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

// import { useGenres } from "../hooks/useGenres";
// import { getCroppedImageUrl } from "../sevices/image-url";

// export const GenreList = () => {
//   const { data: genres, error, isLoading } = useGenres();

//   if (error) return null;

//   if (isLoading) return <Spinner />;

//   return (
//     <List>
//       {genres.map((genre) => (
//         <ListItem key={genre.id} padding="5px">
//           <HStack>
//             <Image
//               src={getCroppedImageUrl(genre.image_background)}
//               boxSize="32px"
//               borderRadius={8}
//               objectFit="cover"
//             />
//             <Text fontSize="lg">{genre.name}</Text>
//           </HStack>
//         </ListItem>
//       ))}
//     </List>
//   );
// };
