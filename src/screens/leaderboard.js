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
  Container,
} from "@chakra-ui/react";
import axios from "axios";
import { AppContext } from "../App";
import { Redirect } from "react-router-dom";

export class LeaderBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: "",
      loading: false,
    };

    const token = localStorage.getItem("ca_token");

    // if(!token){

    // }

    this.setState({ loading: true });
    axios
      .get("http://127.0.0.1:8000/caportal/getLeaderBoardRecords/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        this.setState({
          data: res.data,
          loading: false,
        });
      });
  }

  getTier(rank) {
    if (rank < 5) {
      return "Elite";
    } else if (rank < 15) {
      return "Diamond";
    } else if (rank < 30) {
      return "Platinum";
    } else if (rank < 50) {
      return "Gold";
    } else if (rank < 175) {
      return "Silver";
    } else {
      return "Broze";
    }
  }

  render() {
    return (
      <>
        <AppContext.Consumer>
          {({ isLoggedIn }) => {
            if (!isLoggedIn) return <Redirect to="/" />;
          }}
        </AppContext.Consumer>
        <Box mt={25}>
          <Center mb="25px">
            <Heading>LeaderBoard</Heading>
          </Center>
          <Container mt={75} maxW={["100%", "80%"]}>
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
                {this.state.data &&
                  this.state.data.map((item, index) => {
                    return (
                      <Tr key={index}>
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
        </Box>
      </>
    );
  }
}

export default LeaderBoard;
