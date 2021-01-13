/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Box, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FcOk } from "react-icons/fc";
import { MdCheckCircle } from "react-icons/md";
import { FaAward, FaArrowAltCircleRight } from "react-icons/fa";
import { AppContext } from "../App";
import { Redirect } from "react-router-dom";

// import {useAuth0} from '@auth0/auth0-react';

// const LoginBtn = () => {
//     const {loginWithRedirect, user, isAuthenticated,getAccessTokenSilently} = useAuth0();
//     if(isAuthenticated){
//         console.log(user);
//         (async ()=>{
//             try{
//                 const token = await getAccessTokenSilently();
//                 console.log(token);
//             }catch(e){
//                 console.error(e);
//             }
//         })();

//     }

//     return isAuthenticated ? <p>{`${user.name}`}</p> : <button onClick={()=>{loginWithRedirect()}}>Login</button>
// }

export class Home extends Component {
  render() {
    return (
      <>
        <AppContext.Consumer>
          {({ firstLogin }) => {
            if (firstLogin) {
              return <Redirect to="/profile" />;
            }
          }}
        </AppContext.Consumer>
        <Box mt={25} mb={25} mx={5} textAlign="center">
          <Box
            bgColor="lightgrey"
            height="auto"
            width="95%"
            mx="auto"
            p="15px"
            textAlign="left"
            fontSize="18px"
          >
            <Text fontSize="18px" textAlign="left">
              This is a call for college students across the country to become
              Campus Ambassadors for ELAN & ηVision 2021. Elan and ηVision is
              the annual techno-cultural fest of IIT Hyderabad and is one of the
              largest fests in South India. This fest offers ample opportunities
              to students who wish to showcase their expertise in technological
              domains and artistry in cultural counterparts. With thousands of
              participants and the likes of Darshan Raval, Nikhil Chinappa,
              Vijay Devarakonda and Kailash Kher, the fest has previously
              partnered with Realme, Cyient, British Council among others.
            </Text>
            <br />
            <br />
            <Text fontSize="18px" textAlign="left">
              The Campus Ambassador Programme is a chance for you to be a part
              of this fest as more than just a participant. You will be a point
              of contact for ELAN & ηVision 2021 and your college. You will
              relay information about ELAN & ηVision to the prospective students
              of your college. The primary goal you will be expected to
              accomplish will be to promote our events in your college and
              especially connect us with your clubs.
            </Text>
            <br />
            <Text>
              Responsibilities :
              <List>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Online publicity through social media.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Increasing the reach of the fest.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Coming up with innovative ideas to help ELAN & ηNision to
                  reach out to your college and peers.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Encouraging participation from your college in online
                  competitions.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Organising events and workshops.
                </ListItem>
              </List>
            </Text>

            <br />
            <Text>
              Incentives :
              <List>
                <ListItem>
                  <ListIcon as={FaAward} color="yellow.600" /> Certificates from
                  ELAN & ηvision 2021{" "}
                </ListItem>
                <ListItem>
                  <ListIcon as={FaAward} color="yellow.600" /> Free ELAN &
                  ηVision merchandise for top 20 CAs.{" "}
                </ListItem>
                <ListItem>
                  <ListIcon as={FaAward} color="yellow.600" />
                  Amazing rewards for accomplishing given tasks.{" "}
                </ListItem>
                <ListItem>
                  <ListIcon as={FaAward} color="yellow.600" />
                  Free participation in events and workshops.{" "}
                </ListItem>
                <ListItem>
                  <ListIcon as={FaAward} color="yellow.600" /> Internship
                  opportunities for top performing CAs.{" "}
                </ListItem>
                <ListItem>
                  <ListIcon as={FaAward} color="yellow.600" /> Chance to
                  interact with Celebrities during the fest.{" "}
                </ListItem>
                <ListItem>
                  <ListIcon as={FaAward} color="yellow.600" /> Recognition on
                  our social media platforms and official website{" "}
                </ListItem>
              </List>
            </Text>

            <br />
            <Text>
              Why be a CA?:
              <List>
                <ListItem>
                  <ListIcon as={FaArrowAltCircleRight} color="green.500" />
                  It’s a POR (Position Of Responsibility) in one of the largest
                  fests in the city. Looks pretty darn good on a resumè.{" "}
                </ListItem>
                <ListItem>
                  <ListIcon as={FaArrowAltCircleRight} color="green.500" /> You
                  build fantastic networks as an Ambassador, as you have the
                  opportunity to work with people from all over the country.{" "}
                </ListItem>
                <ListItem>
                  <ListIcon as={FaArrowAltCircleRight} color="green.500" />
                  Given ambassadors are promoters for firms/organisations, this
                  is an excellent way to develop Soft Skills and Communication.{" "}
                </ListItem>
                <ListItem>
                  <ListIcon as={FaArrowAltCircleRight} color="green.500" />
                  Also there is a great scope for you to gain marketing and
                  managerial skills through our CA Programme.
                </ListItem>
              </List>
            </Text>
          </Box>
          {/* <LoginBtn/> */}
        </Box>
      </>
    );
  }
}

export default Home;
