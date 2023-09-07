import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, HStack, ListItem, Text, UnorderedList, VStack, useMediaQuery, IconButton, Icon, Spacer } from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaTerminal } from 'react-icons/fa';

function AboutMe() {

    //const { colorMode } = useColorMode();
    //const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");


    return (
        <Flex mt="150px" alignSelf='center' alignContent='flex-start' flexDirection='row' ml='8'>
            <VStack>
                <Text fontSize="4xl" fontWeight='bold' alignSelf="flex-start" ml=''>About Me</Text>
                <UnorderedList>
                    <ListItem fontSize='xl'>I am a student at the University Maryland, College Park, pursuing a degree in Computer Science.</ListItem>
                    <ListItem fontSize='xl'>Point 2</ListItem>
                    <ListItem fontSize='xl'>Point 3</ListItem>
                </UnorderedList>
            </VStack>
        </Flex>
        
    )
}

export default AboutMe;