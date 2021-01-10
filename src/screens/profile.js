import React, { Component } from 'react'
import {Box, Flex, Center,Text,Heading,Container,FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,Input,Button} from '@chakra-ui/react';

export class Profile extends Component {
    render() {
        return (
            <Box mt={25} >
                <Center><Heading>Profile</Heading></Center>
                <Container mt={75} maxW={['100%','50%']}>
                    <FormControl m={5} id="name" isRequired>
                        <FormLabel>First name</FormLabel>
                        <Input defaultValue="Brijesh" />
                    </FormControl>

                    <FormControl m={5}  id="email" >
                        <FormLabel>Email</FormLabel>
                        <Input disabled defaultValue="cs19btech11047@iith.ac.in" />
                    </FormControl>

                    <FormControl m={5}  id="phone" isRequired>
                        <FormLabel>Phone</FormLabel>
                        <Input defaultValue="8698488688" />
                    </FormControl>

                    <FormControl m={5}  id="institution" isRequired>
                        <FormLabel>School/College</FormLabel>
                        <Input defaultValue="IITH" />
                    </FormControl>

                    <FormControl m={5}  id="insta" >
                        <FormLabel>Instagram</FormLabel>
                        <Input defaultValue="brijesh,aaghav" />
                    </FormControl>

                    <FormControl m={5}  id="facebook" >
                        <FormLabel>FaceBook</FormLabel>
                        <Input defaultValue="brijaghav1" />
                    </FormControl>

                    <Button m={5} colorScheme="teal" >Update</Button>
                </Container>
            </Box>
        )
    }
}

export default Profile
