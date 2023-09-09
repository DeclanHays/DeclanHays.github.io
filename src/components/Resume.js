import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, HStack, ListItem, Text, UnorderedList, Stack, useMediaQuery, Spacer } from '@chakra-ui/react';
import React from 'react';

function Resume() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");

    return (
        <Flex flexDirection='row' ml='8'>
            <Accordion allowToggle allowMultiple width="100vh" flex='1'>
                <AccordionItem>
                    <h>
                        <AccordionButton>
                            <Box as='span' alignSelf='center' flex='1'>
                                <Text fontSize="4xl" fontWeight='bold'  ml=''>About Me</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h>
                    <AccordionPanel pb={4}>
                        <HStack>
                            <Box>
                                <UnorderedList>
                                    <ListItem>
                                        I am currently in my senior year at the University of Maryland, College Park, pursuing my B.S. in Computer Science.
                                    </ListItem>
                                    <ListItem>
                                        During summer of 2023, I gained experience in front-end software engineering through my internship at Veradigm. 
                                    </ListItem>
                                    <ListItem>
                                        My professional interests are in front-end, back-end, and full-stack software development, as well as data science and A.I. 
                                    </ListItem>
                                    <ListItem>
                                    Previously, I have worked at a boat rental company where I fulfilled duties as a captain, customer service rep, and performed maintenance on the boats.
                                    </ListItem>
                                </UnorderedList>
                            </Box>
                        </HStack>
                    </AccordionPanel>
                </AccordionItem>


                <AccordionItem>
                    <h>
                        <AccordionButton>
                            <Box as='span' flex='1'>
                                <Text fontSize="4xl" fontWeight='bold' alignSelf="flex-start" ml=''>Education</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h>
                    <AccordionPanel pb={4}>
                        <Flex flexWrap='wrap'>
                            <Box>
                                <Text fontSize='xl' fontWeight='bold' >University of Maryland, College Park</Text>
                                <Text fontSize='l' >GPA: 3.48/4.00</Text>
                                <Text>Relevant Coursework:</Text>
                                <UnorderedList>
                                    <ListItem>Current: CMSC 421: Intro to Artificial Intelligence (Python)</ListItem>
                                    <ListItem>Current: CMSC 320: Intro to Data Science (Python)</ListItem>
                                    <ListItem>CMSC 433: Programming Language Technologies and Paradigms (Haskell)</ListItem>
                                    <ListItem>CMSC 420: Advanced Data Structures (Python)</ListItem>
                                    <ListItem>CMSC 351: Algorithms</ListItem>
                                    <ListItem>CMSC 335: Web Development w/ JavaScript (JavaScript, HTML, CSS)</ListItem>
                                    <ListItem>CMSC 330: Organization of Programming Languages (OCaml, Ruby, Rust)</ListItem>
                                    <ListItem>CMSC 250: Discrete Math</ListItem>
                                    <ListItem>CMSC 216: Intro to Computer Systems (C)</ListItem>
                                    <ListItem>CMSC 133: Object Oriented Programming (Java)</ListItem>
                                </UnorderedList>
                            </Box>
                            <Spacer />
                            <Box>
                                <Text fontSize='xl' fontWeight='bold' >Anne Arundel Community College</Text>
                                <Text fontSize='l' >GPA: 3.93/4.00</Text>
                                <Text>Relevant Coursework:</Text>
                                <UnorderedList>
                                    <ListItem>Intro to Data Science</ListItem>
                                    <ListItem>Object Oriented Programming w/ Java</ListItem>
                                </UnorderedList>
                            </Box>
                            <Spacer />
                            <Box>
                                <Text fontSize='xl' fontWeight='bold' >South River High School</Text>
                                <Text fontSize='l' >GPA: 3.90/4.00</Text>
                                <Text>Relevant Coursework:</Text>
                                <UnorderedList>
                                    <ListItem>A.P Computer Science A</ListItem>
                                </UnorderedList>
                            </Box>
                        </Flex>
                    </AccordionPanel>
                </AccordionItem>


                <AccordionItem>
                    <h>
                        <AccordionButton>
                            <Box as='span' flex='1'>
                                <Text fontSize="4xl" fontWeight='bold' alignSelf="flex-start" ml=''>Experience</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h>
                    <AccordionPanel pb={4}>
                        <Stack>
                            <Box>
                                <Text fontSize='xl' fontWeight={'bold'}>Veradigm</Text>
                                <Text fontSize='l'>Software Engineering Intern | May 2023 - Aug 2023</Text>
                                <UnorderedList>
                                    <ListItem>Created a testing suite using JavaScript and Puppeteer for validating component styles.</ListItem>
                                    <ListItem>Expanded accessibility for pre-existing Ember.js components using CSS classes.</ListItem>
                                    <ListItem>Integrated third-party accessibility-auditing tool into codebase. Used library to test for, and solve, accessibility errors in e-prescribe workflow.</ListItem>
                                    <ListItem>Implemented accessible components into e-prescribe workflow in Practice Fusion using HTML.</ListItem>
                                    <ListItem>Wrote unit, integration, and acceptance tests to cover new components added to codebase.</ListItem>
                                    <ListItem>Participated in code reviews and provided constructive feedback to team members.</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box>
                                <Text fontSize='xl' fontWeight={'bold'}>South River Boat Rentals</Text>
                                <Text fontSize='l'>Captain/Customer Service Representative | May 2018 - Aug 2022 </Text>
                                <UnorderedList>
                                    <ListItem>Led customers on 4-to-8-hour excursions on the Chesapeake Bay.</ListItem>
                                    <ListItem>Taught customers to drive boats safely and to adhere to coast guard regulations.</ListItem>
                                    <ListItem>Worked with team to safely guide dozens of boats to and from docks.</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box>
                                <Text fontSize='xl' fontWeight={'bold'}>Anne Arundel Community College</Text>
                                <Text fontSize='l'>Data Science Tutor | Oct 2021 - May 2022 </Text>
                                <UnorderedList>
                                    <ListItem>Instructed novice programmers in Python and guided debugging.</ListItem>
                                    <ListItem>Assisted math students with coursework up to Calculus I.</ListItem>
                                </UnorderedList>
                            </Box>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>


                <AccordionItem>
                    <h>
                        <AccordionButton>
                            <Box as='span' flex='1'>
                                <Text fontSize="4xl" fontWeight='bold' alignSelf="flex-start" ml=''>Skills</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h>
                    <AccordionPanel pb={4}>
                        <Flex flexWrap='wrap' direction={isNotSmallerScreen ? 'row' : 'column'}>
                            <Box marginRight='50px' pb={2}>
                                <Text fontSize="xl" fontWeight={'bold'}>Programming Languages</Text>
                                <UnorderedList>
                                    <ListItem>JavaScript</ListItem>
                                    <ListItem>Python</ListItem>
                                    <ListItem>Java</ListItem>
                                    <ListItem>C</ListItem>
                                    <ListItem>OCaml</ListItem>
                                    <ListItem>Haskell</ListItem>
                                </UnorderedList>
                            </Box>
                            
                            <Box marginRight='50px' pb={2}>
                                <Text fontSize="xl" fontWeight={'bold'}>Web Development</Text>
                                <UnorderedList>
                                    <ListItem>HTML</ListItem>
                                    <ListItem>CSS</ListItem>
                                    <ListItem>Ember</ListItem>
                                    <ListItem>Express</ListItem>
                                </UnorderedList>
                            </Box>
                            
                            <Box marginRight='50px' pb={2}> 
                                <Text fontSize="xl" fontWeight={'bold'}>Other</Text>
                                <UnorderedList>
                                    <ListItem>Git</ListItem>
                                    <ListItem>Node.js</ListItem>
                                    <ListItem>Jira</ListItem>
                                    <ListItem>Linux</ListItem>
                                    <ListItem>Handlebars</ListItem>
                                    <ListItem>MongoDB</ListItem>
                                </UnorderedList>
                            </Box>
                        </Flex>
                    </AccordionPanel>
                </AccordionItem>


                <AccordionItem>
                    <h>
                        <AccordionButton>
                            <Box as='span' flex='1'>
                                <Text fontSize="4xl" fontWeight='bold' alignSelf="flex-start" ml=''>Projects</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h>
                    <AccordionPanel pb={4}>
                        <Stack>
                            <Box>
                                <Text fontSize='xl' fontWeight={'bold'}>Personal Website</Text>
                                <Text fontSize='l'>JavaScript, HTML, CSS, React | Aug 2023 - Sep 2023</Text>
                                <UnorderedList>
                                    <ListItem>Used React and ChakraUI to make a personal portfolio website.</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box>
                                <Text fontSize='xl' fontWeight={'bold'}>DVD Emporium</Text>
                                <Text fontSize='l'>Haskell | May 2023</Text>
                                <UnorderedList>
                                    <ListItem>Created a specialized data structure, an STM queue, for use in concurrent programs using the Software Transactional Memory model.</ListItem>
                                    <ListItem>Wrote the back end for a hypothetical DVD delivery service which uses the STM queue to schedule concurrent “drivers” to “deliver” DVD's in order, as they are ordered.</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box>
                                <Text fontSize='xl' fontWeight={'bold'}>Data Structures</Text>
                                <Text fontSize='l'>Python | Jan 2023 - May 2023</Text>
                                <UnorderedList>
                                    <ListItem>Used Python to implement various data structures including Scapegoat Trees, B+ Trees, Bloom Filters, AVL Trees, and Binary Search Trees.</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box>
                                <Text fontSize='xl' fontWeight={'bold'}>MicrOCaml</Text>
                                <Text fontSize='l'>OCaml | Nov 2023</Text>
                                <UnorderedList>
                                    <ListItem>Used OCaml to write “MicrOCaml”: a lexer, parser, and interpreter for a miniature version of OCaml. MicrOCaml allows the user to write programs which are fully processed and executed by MicrOCaml.</ListItem>
                                    <ListItem>Includes capabilities for handling “let” and “if” expressions, function definitions, anonymous functions, and binary operators.</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box>
                                <Text fontSize='xl' fontWeight={'bold'}>Summer Camp App</Text>
                                <Text fontSize='l'>JavaScript, HTML, CSS | Nov 2022</Text>
                                <UnorderedList>
                                    <ListItem>Designed a web application, written in JavaScript, for a fictional summer camp.</ListItem>
                                    <ListItem>Utilized MongoDB to store and retrieve applicant data upon request and used Express for routing.</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box>
                                <HStack>
                                    <Text fontSize='xl' fontWeight={'bold'}>Regular Expression Engine</Text>
                                    <Text fontSize='l'>OCaml | Oct 2022</Text>
                                </HStack>
                                <UnorderedList>
                                    <ListItem>Created an engine which allows the user to convert between regular expressions, non-deterministic finite automata, and deterministic finite automata using OCaml. </ListItem>
                                    <ListItem>Allows the user to provide a regular expression and test if given inputs are valid. 	</ListItem>
                                </UnorderedList>
                            </Box>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
                
            </Accordion>

        </Flex>
        
    )
}

export default Resume;