import { useColorMode, useMediaQuery, Circle, Flex, Box, Text, Stack, Button, Image, HStack } from '@chakra-ui/react';
import React from 'react';

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");

    return (
        <Stack>
            <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0" : "8"} 
                    borderRadius="full" backgroundColor="white" opacity="1" boxShadow="lg" boxSize="300px"
                    src="https://avatars.githubusercontent.com/u/48809634?s=400&u=f21ca36dbdefafd12e65b49446ad6df8dd2111a9&v=4"></Image>
            <Text mb="0" align="center" fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Declan Hays</Text>

            <Flex direction={isNotSmallerScreen ? "row" : "column"} 
                spacing="200px" 
                p={isNotSmallerScreen ? "1" : "0"} 
                alignSelf="center">
                
                <Box mt={isNotSmallerScreen ? "0" : 8} pb="600px" align="flex-start" alignItems="center">
                    <Text fontSize="xl" align="center" color={isDark ? "gray.200" : "gray.500"}>
                        Computer Science student at the University of Maryland
                    </Text>
                    <Text fontSize="xl" align='center' color={isDark ? "gray.200" : "gray.500"}>
                        Previously interned at Practice Fusion
                    </Text>
                </Box>
                
            </Flex>
            
            <Flex justifyContent='center' flexWrap='wrap'>
                <Button alignSelf='center' width="50" m={2} colorScheme="blue" onClick={() => window.open("https://google.com")} align='center'>Hire Me</Button>
                <Button alignSelf='center' width="50" m={2} colorScheme="blue" onClick={() => window.open("https://google.com")} align='center'>Hire Me</Button>
                <Button alignSelf='center' width="50" m={2} colorScheme="blue" onClick={() => window.open("https://google.com")} align='center'>Hire Me</Button>
                <Button alignSelf='center' width="50" m={2} colorScheme="blue" onClick={() => window.open("https://google.com")} align='center'>Hire Me</Button>
                <Button alignSelf='center' width="50" m={2} colorScheme="blue" onClick={() => window.open("https://google.com")} align='center'>Hire Me</Button>
                <Button alignSelf='center' width="50" m={2} colorScheme="blue" onClick={() => window.open("https://google.com")} align='center'>Hire Me</Button>
                <Button alignSelf='center' width="50" m={2} colorScheme="blue" onClick={() => window.open("https://google.com")} align='center'>Hire Me</Button>
            </Flex>
        </Stack>
    )
}

export default Header;