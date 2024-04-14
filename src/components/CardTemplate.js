import {
  Box,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  Image,
} from "@chakra-ui/react";
import React from "react";
import CardList from "./OptionalComponents/CardList";
import CardAccordion from "./OptionalComponents/CardAccordion";

function CardTemplate({ pictureSource, title, description, renderList, renderAccordion }) {
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

        <CardList 
          hasList={renderList}>
        </CardList>

        <CardAccordion
          hasAccordion={renderAccordion}>

        </CardAccordion>
      </Box>
    </Flex>
  );
}

export default CardTemplate;