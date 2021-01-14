/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import {Box,Text,Container} from '@chakra-ui/react';


export class Comment extends Component {
    render() {
        const {body,by_manager,is_reply,replied_to,time} = this.props.item
        return (<>
           
            {/* mr={this.props.isMine ? 'auto' : '0px'} ml={this.props.isMine ? '0px' : 'auto'} */}
            <Container >
                <Box  my='10px' p='10px' borderRadius='20px' borderWidth='1px'>
                    {is_reply ? (<Text>Replied To: {replied_to}</Text>) : null}
                    <Text>{body}</Text>
                </Box>
            </Container>
            
        </>)
    }
}

export default Comment
