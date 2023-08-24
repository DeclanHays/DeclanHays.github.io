import React from 'react';
import { useMediaQuery } from '@chakra-ui/react';

function Profile() {

    //const { colorMode } = useColorMode();
    //const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");


    return (
        <div>

        </div>
    )
}

export default Profile;