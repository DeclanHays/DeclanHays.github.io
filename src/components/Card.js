import {
  Box,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  Image,
} from "@chakra-ui/react";
import React from "react";
import OptionalList from "./OptionalList";

function Card({ pictureSource, title, description, renderList }) {
  return (
    <Flex width="100%">
      <Box
        p="4"
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="md"
        marginTop="3"
        marginLeft="3"
        minWidth="300px"
        bg=""
      >
        <Flex align="center">
          <Image
            src={pictureSource}
            alt="Sample Image"
            boxSize="100px"
            mr="4"
          />

          <Box>
            <Text fontSize="xl" fontWeight="bold">
              {title}
            </Text>
          </Box>
        </Flex>

        <Box mt="4">
          <Text>
            {description}
          </Text>
        </Box>

        <OptionalList 
          hasList={renderList}>
        </OptionalList>
      </Box>
    </Flex>
  );
}

export default Card;