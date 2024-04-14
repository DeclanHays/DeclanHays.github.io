import { Box, Flex, HStack, ListItem, Text, UnorderedList, useMediaQuery, Image } from '@chakra-ui/react';
import React from 'react';

function Skills() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");

    return (
        <Flex width="100%">
            <Box p="4" borderWidth="1px" borderRadius="lg" 
                boxShadow="md" marginTop="3" 
                marginLeft="3" minWidth="300px">

                <Flex align="center">
                  {/* Picture */}
                  <Image src="https://via.placeholder.com/100" alt="Sample Image" boxSize="100px" mr="4" />

                  {/* Title */}
                  <Box>
                    <Text fontSize="xl" fontWeight="bold">Title of the Box</Text>
                  </Box>
                </Flex>

                {/* Paragraph */}
                <Box mt="4">
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                    Pellentesque vel consectetur libero, et pretium libero.
                  </Text>
                </Box>

                {/* Unordered List */}
                <Box mt="4">
                  <Text fontWeight="bold">List:</Text>
                  <UnorderedList mt="2">
                    <ListItem>Item 1</ListItem>
                    <ListItem>Item 2</ListItem>
                    <ListItem>Item 3</ListItem>
                  </UnorderedList>
                </Box>
    </Box>
        </Flex>
        
    )
}

export default Skills;