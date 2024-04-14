import { Box, Flex, HStack, ListItem, Text, UnorderedList, useMediaQuery, Image, VStack, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Education from './Cards/Education';
import AboutMe from './Cards/AboutMe';
import Skills from './Cards/Skills';
import Projects from './Cards/Projects';
import Resume from './Resume';
import Experience from './Cards/Experience';

function ResumeCards() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");

    return (
        <Flex justifyContent="center">
            <SimpleGrid columns={{sm: 1, md: 2}} flexWrap="wrap">
                <AboutMe></AboutMe>
                <Education></Education>
                <Experience></Experience>
                <Skills></Skills>
                <Projects></Projects>
            </SimpleGrid>
        </Flex>
        
    )
}

export default ResumeCards;