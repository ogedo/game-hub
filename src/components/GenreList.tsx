import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import useData from "../hooks/useData";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <List>
      {isLoading && <li>Loading...</li>}
      {data.map((data) => (
        <ListItem key={data.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(data.image_background)}
            />
            <Text>{data.name}</Text>
          </HStack>
        </ListItem>
      ))}
      {error && <li>Error: {error}</li>}
    </List>
  );
};

export default GenreList;
