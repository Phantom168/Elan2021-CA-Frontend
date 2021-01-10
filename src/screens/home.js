import React, { Component } from 'react'
import {Box,Text, Container} from '@chakra-ui/react';

export class Home extends Component {
    render() {
        return (
            <Box mt={25}>
                <Box bgColor="tomato" height="100px" width="100%">
                    <Text>Welcome to homescreen</Text>
                </Box>
            </Box>
        )
    }
}

export default Home
