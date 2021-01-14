import React, { Component } from "react";
import Task from "../components/task";
import axios from "axios";
import { AppContext } from "../App";
import { Redirect } from "react-router-dom";
import { caportal } from "../constants";
import {
  Spinner,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Container,
  Box,
} from "@chakra-ui/react";

export class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: "",
      loading: false,
    };
    const token = localStorage.getItem("ca_token");
    this.setState({ loading: true });
    axios
      .get(`${caportal}/getAllTasksForAmbassador/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        this.setState({ loading: false, data: res.data });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false, error: err });
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

        {this.state.loading && (
          <Center>
            <Spinner size="xl" />
          </Center>
        )}
        {this.state.error && (
          <Container>
            <Alert
              w="60%"
              mx="auto"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              my="auto"
              mt="5%"
              status="error"
            >
              <AlertIcon />
              <AlertTitle mr="2">Error Loading Tasks!</AlertTitle>
              <AlertDescription>
                Check your Internet Connection and Try Again Later
              </AlertDescription>
            </Alert>
          </Container>
        )}
        {this.state.data && this.state.data.length == 0 && (
          <Alert
            w="60%"
            mx="auto"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            status="info"
            my="auto"
            mt="5%"
          >
            <AlertIcon />
            <AlertTitle mr="2">No Tasks for Now</AlertTitle>
            <AlertDescription>Check Later for New Tasks</AlertDescription>
          </Alert>
        )}
        <Box minH="60vh">
          {this.state.data &&
            this.state.data.length > 0 &&
            this.state.data.map((item, index) => {
              return <Task key={index} {...item} />;
            })}
        </Box>
      </>
    );
  }
}

export default Tasks;
