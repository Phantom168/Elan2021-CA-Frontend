/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import {
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
  Table,
  Thead,
  TableCaption,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Center,
  Container,
} from "@chakra-ui/react";
import { FcOk } from "react-icons/fc";
import { MdCheckCircle } from "react-icons/md";
import { FaAward, FaArrowAltCircleRight } from "react-icons/fa";
import { AppContext } from "../App";
import { Redirect } from "react-router-dom";
import "./home.css";

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
          {({ isLoggedIn, isProfileComplete }) => {
            if (isLoggedIn && !isProfileComplete) {
              return <Redirect to="/profile" />;
            }
          }}
        </AppContext.Consumer>
        <Box pt={"5vw"} pb={"5vw"} px={5} textAlign="center" className="grad">
          <Box
            backgroundColor="white"
            height="auto"
            width="90%"
            mx="auto"
            p="30px"
            textAlign="left"
            fontSize="18px"
            borderRadius="20px"
          >
            <Center>
              <Heading as="h1" size="2xl" mb="50px">
                Welcome to Elan and ηVision CA Portal
              </Heading>
            </Center>

            <AppContext.Consumer>
              {({ isLoggedIn }) => {
                if (isLoggedIn) {
                  return (
                    <>
                      <Heading mb="10px" as="h4" size="lg">
                        CA Rules
                      </Heading>
                      <List mb="50px">
                        <ListItem>
                          <ListIcon as={MdCheckCircle} color="green.500" />
                          Points are allotted by our organisers and the
                          team&apos;s decision will be final.
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MdCheckCircle} color="green.500" />
                          Join the WhatsApp group using the link which is sent
                          through the email.
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MdCheckCircle} color="green.500" />
                          You will be updated regarding the tasks and other
                          information by our Team in the WhatsApp group
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MdCheckCircle} color="green.500" />
                          After completing any task a screenshot of the post
                          /story has to be sent in WhatsApp as the proof.
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MdCheckCircle} color="green.500" />
                          Screenshot has to be taken after a minimum of 20 hours
                          of posting.
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MdCheckCircle} color="green.500" />
                          CAs must provide their ideas for publicising ELAN &
                          Nvision and its events during the discussions which
                          will be held by our team
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MdCheckCircle} color="green.500" />
                          Additional points may be allotted based on the
                          engagement your story/post receives and your
                          performance.
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MdCheckCircle} color="green.500" />
                          Separate tasks will be given in case of any tie
                          situation.
                        </ListItem>
                      </List>
                      <br />

                      <Container
                        mb="50px"
                        border="1px"
                        borderRadius="10px"
                        px="0"
                      >
                        <Table variant="striped" px="0" mx="0">
                          <TableCaption>Points for each Task</TableCaption>
                          <Thead>
                            <Tr>
                              <Th>
                                <Heading size="md">Sr. No.</Heading>
                              </Th>
                              <Th>
                                <Heading size="md">Task</Heading>
                              </Th>
                              <Th>
                                <Heading size="md">Points</Heading>
                              </Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Td>1</Td>
                              <Td>Instagram Story</Td>
                              <Td isNumeric>20</Td>
                            </Tr>
                            <Tr>
                              <Td>2</Td>
                              <Td>Facebook Story</Td>
                              <Td isNumeric>20</Td>
                            </Tr>
                            <Tr>
                              <Td>3</Td>
                              <Td>Instagram Repost</Td>
                              <Td isNumeric>30</Td>
                            </Tr>
                            <Tr>
                              <Td>4</Td>
                              <Td>Facebook Repost / Share</Td>
                              <Td isNumeric>30</Td>
                            </Tr>
                            <Tr>
                              <Td>5</Td>
                              <Td>Comment in Insta and FB</Td>
                              <Td isNumeric>10</Td>
                            </Tr>
                            <Tr>
                              <Td>6</Td>
                              <Td>Whatsapp Story</Td>
                              <Td isNumeric>20</Td>
                            </Tr>
                            <Tr>
                              <Td>7</Td>
                              <Td>Whatsapp Group Share</Td>
                              <Td>10 (Per Group)</Td>
                            </Tr>
                            <Tr>
                              <Td>8</Td>
                              <Td>
                                Bringing Participants for Culti &amp; Techy
                                events{" "}
                              </Td>
                              <Td>40 (Per Participant)</Td>
                            </Tr>
                            <Tr>
                              <Td>9</Td>
                              <Td> Bringing Registrations for Workshops</Td>
                              <Td>40 ( per registration)</Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </Container>

                      <br />

                      <Heading mb="10px" as="h4" size="lg">
                        {" "}
                        Leaderboard Rules
                      </Heading>
                      <Text>
                        The final leaderboard has to be divided into the
                        following categories :
                      </Text>
                      <List>
                        <ListItem>
                          <ListIcon
                            as={FaArrowAltCircleRight}
                            color="green.500"
                          />
                          Elite - 1 to 25{" "}
                        </ListItem>
                        <ListItem>
                          <ListIcon
                            as={FaArrowAltCircleRight}
                            color="green.500"
                          />
                          Diamond - 26 to 45{" "}
                        </ListItem>
                        <ListItem>
                          <ListIcon
                            as={FaArrowAltCircleRight}
                            color="green.500"
                          />
                          Platinum - 46 to 105{" "}
                        </ListItem>
                        <ListItem>
                          <ListIcon
                            as={FaArrowAltCircleRight}
                            color="green.500"
                          />
                          Gold - 106 to 225
                        </ListItem>
                        <ListItem>
                          <ListIcon
                            as={FaArrowAltCircleRight}
                            color="green.500"
                          />
                          Silver - 226 to 385
                        </ListItem>
                        <ListItem>
                          <ListIcon
                            as={FaArrowAltCircleRight}
                            color="green.500"
                          />
                          Broze - 386 and above
                        </ListItem>
                      </List>
                      <br />
                      <br />
                      <br />
                    </>
                  );
                }
              }}
            </AppContext.Consumer>
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
            <AppContext.Consumer>
              {({ isLoggedIn }) => {
                if (isLoggedIn) {
                  return (
                    <>
                      <Heading mb="10px" as="h4" size="lg">
                        Responsibilities
                      </Heading>
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
                          Coming up with innovative ideas to help ELAN & ηNision
                          to reach out to your college and peers.
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

                      <br />
                    </>
                  );
                }
              }}
            </AppContext.Consumer>

            <Heading mb="10px" as="h4" size="lg">
              Incentives :
            </Heading>
            <List>
              <ListItem>
                <ListIcon as={FaAward} color="yellow.600" /> One-on-one free
                study abroad counseling sessions by Yocket for top 25 CAs{" "}
              </ListItem>
              <ListItem>
                <ListIcon as={FaAward} color="yellow.600" /> Direct Internship
                opportunities for top 25 CAs by Yocket{" "}
              </ListItem>
              <ListItem>
                <ListIcon as={FaAward} color="yellow.600" /> Certificates from
                ELAN &amp; ηvision 2021{" "}
              </ListItem>
              <ListItem>
                <ListIcon as={FaAward} color="yellow.600" />
                Free ELAN &amp; ηVision merchandise for top 20{" "}
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
                <ListIcon as={FaAward} color="yellow.600" />
                Cash prizes will be awarded to top CAs.{" "}
              </ListItem>
              <ListItem>
                <ListIcon as={FaAward} color="yellow.600" />
                Recognition on our social media platforms and official website{" "}
              </ListItem>
            </List>

            <br />
            <Heading mb="10px" as="h4" size="lg">
              Why be a CA?
            </Heading>
            <List>
              <ListItem>
                <ListIcon as={FaArrowAltCircleRight} color="green.500" />
                It’s a POR (Position Of Responsibility) in one of the largest
                fests in the city. Looks pretty darn good on a resumè.{" "}
              </ListItem>
              <ListItem>
                <ListIcon as={FaArrowAltCircleRight} color="green.500" />
                You build fantastic networks as an Ambassador, as you have the
                opportunity to work with people from all over the country.{" "}
              </ListItem>
              <ListItem>
                <ListIcon as={FaArrowAltCircleRight} color="green.500" />
                Given ambassadors are promoters for firms/organisations, this is
                an excellent way to develop Soft Skills and Communication.{" "}
              </ListItem>
              <ListItem>
                <ListIcon as={FaArrowAltCircleRight} color="green.500" />
                Also there is a great scope for you to gain marketing and
                managerial skills through our CA Programme.
              </ListItem>
            </List>
          </Box>
          {/* <LoginBtn/> */}
        </Box>
      </>
    );
  }
}

export default Home;
