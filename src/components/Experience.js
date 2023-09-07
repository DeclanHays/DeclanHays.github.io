import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, HStack, ListItem, Text, UnorderedList, VStack, useMediaQuery, IconButton, Icon, Spacer } from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaTerminal } from 'react-icons/fa';

function Experience() {

    //const { colorMode } = useColorMode();
    //const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");


    return (
        <Flex mt="150px" alignSelf='flex-start' alignContent='flex-start' flexDirection='row' ml='8'>
            <VStack alignSelf='flex-start'>
                <Text fontSize="4xl" fontWeight='bold' alignSelf="flex-start" ml=''>Education</Text>
                <HStack alignSelf='flex-start'>
                    <Accordion allowToggle w="%" alignSelf="flex-start" bgColor="gray.700">
                        <AccordionItem border="3px">    
                            <AccordionButton>
                                <Box textAlign="left">
                                    <HStack>
                                        <Icon as={FaTerminal}></Icon>
                                        <VStack alignItems='flex-start'>
                                            <Text fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'>College Park, MD | Aug 2021 - May 2024</Text>
                                            <Text fontSize='2xl' fontWeight={'bold'}>University of Maryland</Text>
                                            <Text mt={2} fontSize='md'>B.S. Computer Science</Text>
                                        </VStack>
                                        <AccordionIcon />
                                    </HStack>
                                </Box>
                            </AccordionButton>
                            <AccordionPanel>
                                <UnorderedList>
                                    <ListItem>GPA: 3.48/4.00</ListItem>
                                    <ListItem>Relevant Coursework:
                                        <UnorderedList>
                                            <ListItem>Class 1</ListItem>
                                            <ListItem>Class with a very very extremely long name</ListItem>
                                        </UnorderedList>
                                    </ListItem>
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
                                        <VStack alignItems='flex-start'>
                                            <Text fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'>Arnold, MD | Aug 2020 - May 2021</Text>
                                            <Text fontSize='2xl' fontWeight={'bold'}>Anne Arundel Community College</Text>
                                            <Text mt={2} fontSize='md'>A.S General Studies</Text>
                                        </VStack>
                                        <AccordionIcon />
                                    </HStack>
                                </Box>
                            </AccordionButton>

                            <AccordionPanel>
                                <UnorderedList>
                                    <ListItem>GPA: 3.93/4.00</ListItem>
                                    <ListItem>Relevant Coursework:
                                        <UnorderedList>
                                            <ListItem>Class 1</ListItem>
                                            <ListItem>Class with a very very extremely long name</ListItem>
                                        </UnorderedList>
                                    </ListItem>
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
                                        <VStack alignItems='flex-start'>
                                            <Text fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'>Arnold, MD | Aug 2020 - May 2021</Text>
                                            <Text fontSize='2xl' fontWeight={'bold'}>South River High School</Text>
                                            <Text mt={2} fontSize='md'>High School Diploma</Text>
                                        </VStack>
                                        <AccordionIcon />
                                    </HStack>
                                </Box>
                            </AccordionButton>

                            <AccordionPanel>
                                <UnorderedList>
                                    <ListItem>GPA: 3.93/4.00</ListItem>
                                    <ListItem>Relevant Coursework:
                                        <UnorderedList>
                                            <ListItem>Class 1</ListItem>
                                            <ListItem>Class with a very very extremely long name</ListItem>
                                        </UnorderedList>
                                    </ListItem>
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </HStack>
                
            </VStack>
        </Flex>
    )
}

export default Experience;