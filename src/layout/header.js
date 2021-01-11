import React, { Component } from "react";
import {
  Box,
  Flex,
  Center,
  Text,
  Heading,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GrAchievement, GrHome, GrTask } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { GoSignOut } from "react-icons/go";

export class Header extends Component {
  render() {
    return (
      <Flex>
        {/* <Box p="10" ml={['5','10%']}><Link to="/">Home</Link></Box>
                <Box p="10"><Link to="/tasks">Tasks</Link></Box>
                <Box p="10"><Link to="/profile">Profile</Link></Box>
                <Box p="10"><Link to="/leaderboard"><Flex><GrAchievement/> Leaderboard</Flex></Link></Box> */}
        <Link to="/">
          <Button
            leftIcon={<GrHome />}
            px={10}
            my={5}
            ml={["5vw", "10vw"]}
            variant="ghost"
          >
            Home
          </Button>
        </Link>
        <Link to="/tasks">
          <Button leftIcon={<GrTask />} px={10} my={5} variant="ghost">
            Tasks
          </Button>
        </Link>
        <Link to="/profile">
          <Button leftIcon={<CgProfile />} px={10} my={5} variant="ghost">
            Profile
          </Button>
        </Link>
        <Link to="/leaderboard">
          <Button leftIcon={<GrAchievement />} px={10} my={5} variant="ghost">
            Leaderboard
          </Button>
        </Link>

        <Spacer />
        <Button
          leftIcon={<GoSignOut />}
          colorScheme="teal"
          m="5"
          mr={["5", "12%"]}
        >
          Sign Out
        </Button>
      </Flex>
    );
  }
}

export default Header;
