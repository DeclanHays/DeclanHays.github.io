import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, HStack, ListItem, Text, UnorderedList, VStack, useMediaQuery, IconButton, Icon, Spacer } from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaTerminal } from 'react-icons/fa';

function Resume() {

    //const { colorMode } = useColorMode();
    //const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");


    return (
        <Flex mt="150px" flexDirection='row' ml='8'>
            <Accordion allowToggle allowMultiple>
                <AccordionItem>
                    <h>
                        <AccordionButton>
                            <Box as='span' textAlign='left'>
                                <Text fontSize="4xl" fontWeight='bold' alignSelf="flex-start" ml=''>About Me</Text>
                            </Box>
                        </AccordionButton>
                    </h>
                    <AccordionPanel pb={4}>
                        <HStack>
                            <Box>
                                <UnorderedList>
                                    <ListItem>
                                        Item 1
                                    </ListItem>
                                    <ListItem>
                                        Item 2
                                    </ListItem>
                                </UnorderedList>
                            </Box>
                        </HStack>
                    </AccordionPanel>
                </AccordionItem>


                <AccordionItem>
                    <h>
                        <AccordionButton>
                            <Box as='span' textAlign='left'>
                                <Text fontSize="4xl" fontWeight='bold' alignSelf="flex-start" ml=''>Education</Text>
                            </Box>
                        </AccordionButton>
                    </h>
                    <AccordionPanel pb={4}>
                        <HStack>
                            <Box>
                                <Text fontSize='xl' fontWeight='bold' >University of Maryland, College Park</Text>
                                <Text fontSize='l' >GPA: 3.48/4.00</Text>
                                <Text>Relevant Coursework</Text>
                                <UnorderedList>
                                    <ListItem>Class 1</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box ml='14'>
                                <Text fontSize='xl' fontWeight='bold' >Anne Arundel Community College</Text>
                                <Text fontSize='l' >GPA: 3.93/4.00</Text>
                                <Text>Relevant Coursework</Text>
                                <UnorderedList>
                                    <ListItem>Class 1</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box ml='14'>
                                <Text fontSize='xl' fontWeight='bold' >South River High School</Text>
                                <Text fontSize='l' >GPA: 3.93/4.00</Text>
                                <Text>Relevant Coursework</Text>
                                <UnorderedList>
                                    <ListItem>Class 1</ListItem>
                                </UnorderedList>
                            </Box>
                        </HStack>
                    </AccordionPanel>
                </AccordionItem>


                <AccordionItem>
                    <h>
                        <AccordionButton>
                            <Box as='span' textAlign='left'>
                                <Text fontSize="4xl" fontWeight='bold' alignSelf="flex-start" ml=''>Experience</Text>
                            </Box>
                        </AccordionButton>
                    </h>
                    <AccordionPanel pb={4}>
                        <HStack>
                            <Box>
                                <Text>Veradigm</Text>
                            </Box>
                        </HStack>
                    </AccordionPanel>
                </AccordionItem>


                <AccordionItem>
                    <h>
                        <AccordionButton>
                            <Box as='span' textAlign='left'>
                                <Text fontSize="4xl" fontWeight='bold' alignSelf="flex-start" ml=''>Skills</Text>
                            </Box>
                        </AccordionButton>
                    </h>
                    <AccordionPanel pb={4}>
                        <HStack>
                            <Box>
                                <UnorderedList>
                                    <ListItem>
                                        None
                                    </ListItem>
                                    <ListItem>
                                        Item 2
                                    </ListItem>
                                </UnorderedList>
                            </Box>
                        </HStack>
                    </AccordionPanel>
                </AccordionItem>


                <AccordionItem>
                    <h>
                        <AccordionButton>
                            <Box as='span' textAlign='left'>
                                <Text fontSize="4xl" fontWeight='bold' alignSelf="flex-start" ml=''>Projects</Text>
                            </Box>
                        </AccordionButton>
                    </h>
                    <AccordionPanel pb={4}>
                        <HStack>
                            <Box>
                                <UnorderedList>
                                    <ListItem>
                                        Also none
                                    </ListItem>
                                    <ListItem>
                                        Item 2
                                    </ListItem>
                                </UnorderedList>
                            </Box>
                        </HStack>
                    </AccordionPanel>
                </AccordionItem>
                
            </Accordion>

        </Flex>
        
    )
}

export default Resume;