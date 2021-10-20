import React from 'react';

import {IconContext} from 'react-icons';
import { FaSearch } from 'react-icons/fa';

import { Left, Center, Right, HeaderMessageContainer, Language, SearchContainer, Input } from './header-message.styles'

const HeaderMessage = () => {
    return (
        <HeaderMessageContainer>
        <IconContext.Provider value={{ color:'' }}>

        <Left>
            <Language>EN</Language> 
            
            <SearchContainer>
                <Input />
                <FaSearch />
            </SearchContainer>
        </Left>

        <Center>
        SITEWIDE SALE: 10% OFF EVERYTHING!!!
        </Center>

        <Right>
        </Right>

        </IconContext.Provider>
        </HeaderMessageContainer>

    )
}

export default HeaderMessage;