import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, HStack, ListItem, Text, UnorderedList, VStack, useMediaQuery, IconButton, Icon, Spacer } from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaTerminal } from 'react-icons/fa';

function AboutMe() {

    //const { colorMode } = useColorMode();
    //const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");


    return (
        <Flex mt="150px" alignSelf='flex-start' alignContent='flex-start' flexDirection='row' ml='8'>
            <VStack>
                <Text fontSize="4xl" fontWeight='bold' alignSelf="flex-start" ml=''>About Me</Text>
                <UnorderedList>
                    <ListItem fontSize='xl'>I am a student at the University Maryland, College Park, pursuing a degree in Computer Science.</ListItem>
                    <ListItem fontSize='xl'>Point 2</ListItem>
                    <ListItem fontSize='xl'>Point 3</ListItem>
                </UnorderedList>

                <Text fontSize="4xl" fontWeight='bold' alignSelf="flex-start" ml=''>Skills</Text>
                <HStack alignSelf='flex-start'>
                    <Accordion allowToggle w="%" alignSelf="flex-start" bgColor="gray.700">
                        <AccordionItem border="3px">    
                            <AccordionButton>
                                <Box textAlign="left">
                                    <HStack>
                                        <Icon as={FaTerminal}></Icon>
                                        <Text fontSize='xl' fontWeight={'bold'}>Programming Languages</Text>
                                        <AccordionIcon />
                                    </HStack>
                                </Box>
                            </AccordionButton>
                            <AccordionPanel>
                                
                                <HStack alignItems={'flex-start'}>
                                    <Box marginRight="20px">
                                        <Text fontSize='lg' fontWeight='bold'>Proficient</Text>
                                        <UnorderedList>
                                            <ListItem>JavaScript</ListItem>
                                            <ListItem>Python</ListItem>
                                            <ListItem>OCaml</ListItem>
                                            <ListItem>JavaScript</ListItem>
                                            <ListItem>JavaScript</ListItem>
                                        </UnorderedList>
                                    </Box>
                                    
                                    
                                    <Box>
                                        <Text fontSize='lg' fontWeight='bold'>Proficient</Text>
                                        <UnorderedList>
                                            <ListItem>JavaScript</ListItem>
                                            <ListItem>Python</ListItem>
                                            <ListItem>OCaml</ListItem>
                                            <ListItem>JavaScript</ListItem>
                                        </UnorderedList>                                        
                                    </Box>
                                    
                                </HStack>
                                
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    
                    <Accordion allowToggle w="33%" alignSelf="flex-start" bgColor="gray.700">
                        <AccordionItem border="3px">    
                            <AccordionButton>
                                <Box textAlign="left">
                                    <HStack>
                                        <Icon icon={FaMoon}></Icon>
                                        <Text fontSize='xl' fontWeight={'bold'}>Technologies</Text>
                                        <AccordionIcon />
                                    </HStack>
                                </Box>
                            </AccordionButton>

                            <AccordionPanel>
                                This is the text inside the accordion
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    <Accordion allowToggle w="33%" alignSelf="flex-start" bgColor="gray.700">
                        <AccordionItem border="3px">    
                            <AccordionButton>
                                <Box textAlign="left">
                                    <HStack>
                                        <Icon icon={FaMoon}></Icon>
                                        <Text fontSize='xl' fontWeight={'bold'}>Web Technologies</Text>
                                        <AccordionIcon />
                                    </HStack>
                                </Box>
                            </AccordionButton>

                            <AccordionPanel>
                                This is the text inside the accordion
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </HStack>
                
            </VStack>
        </Flex>
        
    )
}

export default AboutMe;