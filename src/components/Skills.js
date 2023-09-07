import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, HStack, ListItem, Text, UnorderedList, VStack, useMediaQuery, IconButton, Icon, Spacer } from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaTerminal } from 'react-icons/fa';

function Skills() {

    //const { colorMode } = useColorMode();
    //const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");


    return (
        <Flex mt="150px" alignSelf='flex-start' alignItems='flex-start' flexDirection='row' ml='8'>
            <VStack alignItems='flex-start'>
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
                                        </UnorderedList>
                                    </Box>
                                    
                                    
                                    <Box>
                                        <Text fontSize='lg' fontWeight='bold'>Familiar</Text>
                                        <UnorderedList>
                                            <ListItem>JavaScript</ListItem>
                                            <ListItem>HTML</ListItem>
                                            <ListItem>CSS</ListItem>
                                            <ListItem>OCaml</ListItem>
                                            <ListItem>Haskell</ListItem>
                                            <ListItem>C</ListItem>
                                            <ListItem>Java</ListItem>
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
                                <UnorderedList>
                                    <ListItem>Git</ListItem>
                                    <ListItem>Ember.js</ListItem>
                                    <ListItem>Node.js</ListItem>
                                    <ListItem>LessCSS</ListItem>
                                    <ListItem>Express</ListItem>
                                    <ListItem>MongoDB</ListItem>
                                    <ListItem>Jira</ListItem>
                                    <ListItem>Unix</ListItem>
                                </UnorderedList>
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

export default Skills;