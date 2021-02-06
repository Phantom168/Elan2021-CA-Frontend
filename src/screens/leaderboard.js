/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import {
  Box,
  Center,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Container,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import axios from "axios";
import { AppContext } from "../App";
import { Redirect } from "react-router-dom";
import { caportal } from "../constants";

export class LeaderBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: "",
      loading: false,
      name: "",
    };
  }

  getTier(rank) {
    if (rank < 25) {
      return (
        <Badge
          bgGradient="linear(to-r, blue, purple)"
          color="white"
          variant="outline"
        >
          Elite
        </Badge>
      );
    } else if (rank < 45) {
      return (
        <Badge
          bgGradient="linear(to-r,yellow.200,gray,red.100,,gray,blue.100)"
          variant="subtle"
          color="white"
        >
          Diamond
        </Badge>
      );
    } else if (rank < 105) {
      return (
        <Badge
          bgGradient="linear(to-r,gray.100, silver, gray.400)"
          variant="subtle"
        >
          Platinum
        </Badge>
      );
    } else if (rank < 225) {
      return (
        <Badge bgColor="gold" color="black" variant="outline">
          Gold
        </Badge>
      );
    } else if (rank < 385) {
      return (
        <Badge bgColor="silver" color="black" variant="outline">
          Silver
        </Badge>
      );
    } else {
      return (
        <Badge bgColor="yellow.700" variant="outline" color="white">
          Broze
        </Badge>
      );
    }
  }

  componentDidMount() {
    const token = localStorage.getItem("ca_token");

    // if(!token){

    // }

    this.setState({ loading: true });
    axios
      .get(`${caportal}/getLeaderBoardRecords/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        this.setState({
          data: res.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({
          error: err,
          loading: false,
        });
      });
  }

  render() {
    return (
      <>
        <AppContext.Consumer>
          {({ isLoggedIn }) => {
            if (!isLoggedIn) return <Redirect to="/" />;
          }}
        </AppContext.Consumer>
        <Box mt={25} mb={25} minH="60vh">
          <Center mb="25px">
            <Heading>LeaderBoard</Heading>
          </Center>
          {this.state.loading && (
            <Center>
              <Spinner size="xl" />
            </Center>
          )}
          {this.state.error && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle mr="2">Error Loading Leaderboard!</AlertTitle>
              <AlertDescription>
                Check your Internet Connection and Try Again Later
              </AlertDescription>
            </Alert>
          )}
          {this.state.data && this.state.data.length > 1 && (
            <Container mt={75} maxW={["100%", "80%"]}>
              <Table variant="striped" border="1px" colorScheme="teal">
                <Thead>
                  <Tr bgColor="gray.400">
                    <Th>
                      <Heading size="md" color="black">
                        Rank
                      </Heading>
                    </Th>
                    <Th>
                      <Heading size="md" color="black">
                        Name
                      </Heading>
                    </Th>
                    <Th>
                      <Heading size="md" color="black">
                        College
                      </Heading>
                    </Th>
                    <Th>
                      <Heading size="md" color="black">
                        Points
                      </Heading>
                    </Th>
                    <Th>
                      <Heading size="md" color="black">
                        Tier
                      </Heading>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {console.log(this.state.data)}
                  {this.state.data &&
                    this.state.data.map((item, index) => {
                      return (
                        // bgColor={item.email == localStorage.getItem('ca_email') ? 'brown' :'null'}
                        <Tr
                          key={index}
                          fontSize={
                            item.email == localStorage.getItem("ca_email")
                              ? "18px"
                              : "14px"
                          }
                          fontWeight={
                            item.email == localStorage.getItem("ca_email")
                              ? "800"
                              : "null"
                          }
                        >
                          <Td>{index + 1}</Td>
                          <Td>{item.name}</Td>
                          <Td>{item.institute}</Td>
                          <Td>{item.score}</Td>
                          <Td>{this.getTier(index)}</Td>
                        </Tr>
                      );
                    })}
                </Tbody>
              </Table>
            </Container>
          )}
        </Box>
      </>
    );
  }
}

export default LeaderBoard;
