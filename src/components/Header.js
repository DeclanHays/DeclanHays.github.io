import { useColorMode, useMediaQuery, Flex, Box, Text, Stack, Image, Center, IconButton } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");

    return (
        <Center>
            <Box display='flex' h='100vh' pb={8}>
                <Stack flex='1'>
                    <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "4"} mb={isNotSmallerScreen ? "0" : "4"} 
                            borderRadius="full" backgroundColor="white" opacity="1" boxShadow="lg" boxSize="300px"
                            src="https://avatars.githubusercontent.com/u/48809634?s=400&u=f21ca36dbdefafd12e65b49446ad6df8dd2111a9&v=4"></Image>
                    <Text mb="0" align="center" fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Declan Hays</Text>

                    <Flex flex='1' direction={isNotSmallerScreen ? "row" : "column"} 
                        spacing="200px" 
                        p={isNotSmallerScreen ? "1" : "0"} 
                        alignSelf="center">
                        
                        <Box mt={isNotSmallerScreen ? "0" : 8} align="flex-start" alignItems="center">
                            <Text fontSize="xl" align="center" color={isDark ? "gray.200" : "gray.500"}>
                                Computer Science student at the University of Maryland
                            </Text>
                            <Text fontSize="xl" align='center' color={isDark ? "gray.200" : "gray.500"}>
                                Previously interned at Practice Fusion
                            </Text>
                        </Box>

                    </Flex>

                    <Flex justifyContent='center' flexWrap='wrap' flex='1'>
                        <IconButton alignSelf='center' width="50" m={2} icon={<FaLinkedin />} onClick={() => window.open('https://www.linkedin.com/in/declan-hays/')}></IconButton>
                        <IconButton alignSelf='center' width="50" m={2} icon={<FaGithub />} onClick={() => window.open('https://github.com/DeclanHays')}></IconButton>
                    </Flex>
                </Stack>
            </Box>
        </Center>
    )
}

export default Header;