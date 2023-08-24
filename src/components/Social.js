import { HStack, Icon } from '@chakra-ui/react';
import React from 'react';
import { FaFacebookF, FaGoogle, FaShopify, FaSpotify } from 'react-icons/fa';

function Social() {
    return (
        <HStack>
            <Icon as={FaFacebookF} boxSize="50"></Icon>
            <Icon as={FaGoogle} boxSize="50"></Icon>
            <Icon as={FaShopify} boxSize="50"></Icon>
            <Icon as={FaSpotify} boxSize="50"></Icon>
        </HStack>
    )
}

export default Social;