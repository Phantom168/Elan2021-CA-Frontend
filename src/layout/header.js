/* eslint-disable no-unused-vars */
import React, { Component, useContext } from "react";
import {
  Flex,
  Spacer,
  Button,
  Text,
  Image,
  Box,
  Stack,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { Link, Redirect } from "react-router-dom";
import { GrAchievement, GrHome, GrTask, GrUser } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { FaComments } from "react-icons/fa";
import { GoSignOut, GoSignIn } from "react-icons/go";
import { AppContext } from "../App";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Logo from "../images/elan-logo.png";
import { caportal } from "../constants";
import "./header.css";

const LoginBtn = (props) => {
  const contextVal = useContext(AppContext);
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  if (isAuthenticated && !contextVal.isLoggedIn) {
    //console.log("hi");
    (async () => {
      try {
        const token = await getAccessTokenSilently().then((token) => {
          axios
            .post(`${caportal}/addNewAmbassador/`, {
              access_token: token,
            })
            .then((res) => {
              console.log(res);
              if (res.status == 200) {
                contextVal.setName(res.data.name);
                contextVal.logIn();
                contextVal.setToken(res.data.token);
                localStorage.setItem("ca_token", res.data.token);
                localStorage.setItem("ca_email", res.data.email);
                contextVal.dp = res.data.picture;
                contextVal.setProfileStatus(res.data.is_profile_complete);
                if (!res.data.is_new_user) {
                  contextVal.setFirstLogin(true);
                }
                //props.refreshFunc();
              }
            })
            .catch((e) => {
              console.error(e);
            });
        });
      } catch (e) {
        console.error(e);
      }
    })();
  }
  if (!isAuthenticated && contextVal.isLoggedIn) {
    contextVal.logOut();
    contextVal.setName("Guest");
    localStorage.removeItem("ca_token");
  }

  return isAuthenticated ? (
    <Button
      display={props.display}
      onClick={() => {
        logout({ returnTo: `${window.location.origin}/` });
      }}
      Icon={<GoSignOut />}
      colorScheme="red"
      //my="5"
      mr={["1vw", "3vw"]}
    >
      Sign Out
    </Button>
  ) : (
    <Button
      display={props.display}
      onClick={() => {
        loginWithRedirect().then(() => {
          console.log("Hi, logged in");
        });
      }}
      leftIcon={<GoSignIn />}
      colorScheme="blue"
      borderColor="blue.600"
      borderWidth="1px"
      //my="5"
      w="max-content"
      mr={["1vw", "3vw"]}
    >
      Sign In
    </Button>
  );
};

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logStatus: false,
      show: false,
    };
  }

  handleToggle() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <>
        <AppContext.Consumer>
          {({ isLoggedIn, isProfileComplete }) => {
            if (isLoggedIn != this.state.logStatus) {
              this.setState({ logStatus: isLoggedIn });
            }
          }}
        </AppContext.Consumer>

        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          padding="1.5rem"
          bg="teal.500"
          color="white"
        >
          <Flex align="center" mr={5}>
            <a href="http://elan.org.in/">
              <Image
                ml={["1vw", "3.5vw"]}
                mt="5px"
                height="50px"
                src={Logo}
              ></Image>
            </a>
          </Flex>

          <Box
            display={{ base: "block", md: "none" }}
            onClick={this.handleToggle.bind(this)}
          >
            <svg
              fill="white"
              width="12px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </Box>

          <Box
            display={{ base: this.state.show ? "block" : "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            flexGrow={1}
          >
            <AppContext.Consumer>
              {({ isLoggedIn, isProfileComplete }) => {
                if (isLoggedIn && !isProfileComplete) {
                  return (
                    <Button
                      className="nav"
                      leftIcon={<GrHome />}
                      px={7}
                      //my={5}
                      //ml={["5vw", "10vw"]}
                      variant="ghost"
                      disabled
                    >
                      Home
                    </Button>
                  );
                } else {
                  return (
                    <Link to="/">
                      <Button
                        className="nav"
                        leftIcon={<GrHome color="white" />}
                        px={7}
                        //my={5}
                        //ml={["5vw", "10vw"]}
                        variant="ghost"
                      >
                        Home
                      </Button>
                    </Link>
                  );
                }
              }}
            </AppContext.Consumer>

            {this.state.logStatus ? (
              <>
                <AppContext.Consumer>
                  {({ isProfileComplete }) => {
                    console.log(isProfileComplete);
                    if (!isProfileComplete) {
                      return (
                        <>
                          <Button
                            disabled
                            leftIcon={<GrTask />}
                            px={7}
                            variant="ghost"
                            className="nav"
                          >
                            Tasks
                          </Button>

                          <Link to="/profile">
                            <Button
                              leftIcon={<GrUser color="#000" />}
                              px={7}
                              variant="ghost"
                              className="nav"
                            >
                              Profile
                            </Button>
                          </Link>

                          <Button
                            disabled
                            className="nav"
                            leftIcon={<GrAchievement />}
                            px={7}
                            //my={5}
                            variant="ghost"
                          >
                            Leaderboard
                          </Button>

                          <Button
                            disabled
                            leftIcon={<FaComments />}
                            px={7}
                            variant="ghost"
                            className="nav"
                          >
                            Profile
                          </Button>
                        </>
                      );
                    } else {
                      return (
                        <>
                          <Link to="/tasks">
                            <Button
                              leftIcon={<GrTask />}
                              px={7}
                              variant="ghost"
                              className="nav"
                            >
                              Tasks
                            </Button>
                          </Link>
                          <Link to="/profile">
                            <Button
                              leftIcon={<GrUser />}
                              px={7}
                              variant="ghost"
                              className="nav"
                            >
                              Profile
                            </Button>
                          </Link>
                          <Link to="/leaderboard">
                            <Button
                              className="nav"
                              leftIcon={<GrAchievement />}
                              px={7}
                              //my={5}
                              variant="ghost"
                            >
                              Leaderboard
                            </Button>
                          </Link>

                          <Link to="/comments">
                            <Button
                              className="nav"
                              leftIcon={<FaComments color="black" />}
                              px={7}
                              //my={5}
                              variant="ghost"
                            >
                              Comments
                            </Button>
                          </Link>
                        </>
                      );
                    }
                  }}
                </AppContext.Consumer>
              </>
            ) : (
              ""
            )}
          </Box>

          {/* <Stack
          //flexDirection='horizontal'
            display={{ base: this.state.show ? "inline-block" : "none", md: "block" }}
            mt={{ base: 4, md: 0 }}
          > */}
          <Text
            px={10}
            my={0}
            display={{ base: this.state.show ? "block" : "none", md: "block" }}
          >
            Hello &nbsp;
            <AppContext.Consumer>{({ name }) => name}</AppContext.Consumer>
          </Text>
          <LoginBtn
            display={{ base: this.state.show ? null : "none", md: "inherit" }}
          />
          {/* </Stack> */}
        </Flex>
      </>
    );
  }
}

export default Header;
