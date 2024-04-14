import {
  Box,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

function OptionalList({ hasList=false }) {
  if (hasList) {
    return (
      <Box mt="4">
        <Text fontWeight="bold">List:</Text>
        <UnorderedList mt="2">
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
        </UnorderedList>
      </Box>
    );
  }
  return null;
}

export default OptionalList;
