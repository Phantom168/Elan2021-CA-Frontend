import React, { Component } from 'react'
import {Box,Text, Container} from '@chakra-ui/react';
import {useAuth0} from '@auth0/auth0-react';

const LoginBtn = () => {
    const {loginWithRedirect, user, isLoading, isAuthenticated,getAccessTokenSilently} = useAuth0();
    if(isAuthenticated){
        console.log(user);
        (async ()=>{
            try{
                const token = await getAccessTokenSilently();
                console.log(token);
            }catch(e){
                console.error(e);
            }
        })();
        
    }
       

    return isAuthenticated ? <p>{`${user.name}`}</p> : <button onClick={()=>{loginWithRedirect()}}>Login</button>
}

export class Home extends Component {
    render() {
        return (
            <Box mt={25}>
                <Box bgColor="tomato" height="100px" width="100%">
                    <Text>Welcome to homescreen</Text>
                </Box>
                <LoginBtn/>
            </Box>
        )
    }
}

export default Home;
