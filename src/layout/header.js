/* eslint-disable no-unused-vars */
import React, { Component, useContext } from "react";
import { Flex, Spacer, Button, Text, Image } from "@chakra-ui/react";
import { Link, Redirect } from "react-router-dom";
import { GrAchievement, GrHome, GrTask } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { GoSignOut, GoSignIn } from "react-icons/go";
import { AppContext } from "../App";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Logo from "../images/elan-logo.png";
import { caportal } from "../constants";

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
                //console.log(res.data,res.data.token,res.data.email);
                contextVal.setName(res.data.name);
                contextVal.logIn();

                localStorage.setItem("ca_token", res.data.token);
                contextVal.dp = res.data.picture;
                props.refreshFunc();
                if (!res.data.is_new_user) {
                  contextVal.setFirstLogin(true);
                }
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
      onClick={() => {
        logout({ returnTo: window.location.origin });
      }}
      leftIcon={<GoSignOut />}
      colorScheme="teal"
      my="5"
      mr={["3vw", "5%"]}
    >
      Sign Out
    </Button>
  ) : (
    <Button
      onClick={() => {
        loginWithRedirect().then(() => {
          console.log("Hi, logged in");
        });
      }}
      leftIcon={<GoSignIn />}
      colorScheme="teal"
      my="5"
      mr={["3vw", "5%"]}
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
    };
  }

  render() {
    return (
      <>
        <AppContext.Consumer>
          {({ isLoggedIn }) => {
            if (isLoggedIn != this.state.logStatus) {
              this.setState({ logStatus: isLoggedIn });
            }
          }}
        </AppContext.Consumer>

        <Flex bgColor="gray.100">
          {/* <Box p="10" ml={['5','10%']}><Link to="/">Home</Link></Box>
                <Box p="10"><Link to="/tasks">Tasks</Link></Box>
                <Box p="10"><Link to="/profile">Profile</Link></Box>
                <Box p="10"><Link to="/leaderboard"><Flex><GrAchievement/> Leaderboard</Flex></Link></Box> */}
          <Link to="http://elan.org.in/">
            <Image ml={["3.5vw"]} mt="5px" height="70px" src={Logo}></Image>
          </Link>
          <Link to="/">
            <Button
              leftIcon={<GrHome />}
              px={7}
              my={5}
              //ml={["5vw", "10vw"]}
              variant="ghost"
            >
              Home
            </Button>
          </Link>

          {this.state.logStatus ? (
            <>
              <Link to="/tasks">
                <Button leftIcon={<GrTask />} px={7} my={5} variant="ghost">
                  Tasks
                </Button>
              </Link>
              <Link to="/profile">
                <Button leftIcon={<CgProfile />} px={7} my={5} variant="ghost">
                  Profile
                </Button>
              </Link>
              <Link to="/leaderboard">
                <Button
                  leftIcon={<GrAchievement />}
                  px={7}
                  my={5}
                  variant="ghost"
                >
                  Leaderboard
                </Button>
              </Link>
            </>
          ) : (
            ""
          )}

          <Spacer />
          <Text px={10} my={7}>
            Hello &nbsp;
            <AppContext.Consumer>{({ name }) => name}</AppContext.Consumer>
          </Text>
          <LoginBtn refreshFunc={this.forceUpdate} />
        </Flex>
      </>
    );
  }
}

export default Header;
