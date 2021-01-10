import React, { Component } from 'react'
import {Box, Flex, Center,Text,Heading,Spacer,Button} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <Flex>

                <Box p="10" ml={['5','10%']}><Link to="/">Home</Link></Box>
                <Box p="10"><Link to="/tasks">Tasks</Link></Box>
                <Box p="10"><Link to="/profile">Profile</Link></Box>
                <Box p="10"><Link to="/leaderboard">Leaderboard</Link></Box>
                <Spacer/>
                <Button m='7' mr={['5','12%']}>Sign Out</Button>

            </Flex>
        )
    }
}

export default Header
