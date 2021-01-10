import React, { Component } from 'react'
import {Box, Flex, Center,Text,Heading,Table, Thead, Tbody, Tr, Th, Td, TableCaption,Container} from '@chakra-ui/react';

export class LeaderBoard extends Component {
    render() {
        return (
            <Box mt={25}>
                <Center mb="25px"><Heading>LeaderBoard</Heading></Center>
                <Container mt={75} maxW={['100%','80%']}>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Rank</Th>
                                <Th>Name</Th>
                                <Th>College</Th>
                                <Th>Points</Th>
                                <Th>Tier</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            
                            <Tr>
                                <Td>1</Td>
                                <Td>Briejsh</Td>
                                <Td>IITH</Td>
                                <Td>9999</Td>
                                <Td>Elite</Td>
                            </Tr>

                        </Tbody>
                    </Table>
                </Container>

            </Box>
        )
    }
}

export default LeaderBoard
