import * as React from 'react';

import { ChakraProvider, VStack, Flex, Heading, IconButton, useColorMode, Spacer, Text, Container } from '@chakra-ui/react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin, FaLink } from 'react-icons/fa';
import Header from './components/Header';
import Resume from './components/Resume';


function App() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    return (
        <VStack p={5} align='center'>
            <Flex w="100%">
                <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">Declan Hays</Heading>
                <Spacer></Spacer>
                <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
            </Flex>
            <Container maxW='container.xl'>
                <Header></Header>
                <Resume></Resume>
            </Container>
            
        </VStack>
    );
}

export default App;
