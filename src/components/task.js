import React, { Component } from "react";
import {
  Box,
  Flex,
  Center,
  Text,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Container,
  Divider,
  Badge,
  Stack,
} from "@chakra-ui/react";

export class Task extends Component {
  render() {
    return (
      <Center my={25}>
        <Container borderRadius={5} maxW={"60%"}>
          <Flex direction="row" justify="space-between">
            <Heading bgColor="lightgrey">Task Name</Heading>
            <Badge h={"auto"} colorScheme="red">
              Not Completed
            </Badge>
          </Flex>

          <Divider />
          <Text>
            <strong>THE FIRST TASK:</strong> - CASE STUDY Hey aspiring CAs of
            our Entrepreneurship Cell!! Here ,we present to you our first task.
            So, get ready guys to put your research and presentation skills to
            test! For starters let me introduce you to the Case Study task:-
            Find the Information regarding the Case Study task below, along with
            the theme and guidelines. Contact your CA manager for further
            queries. Please go through the given theme and ask any queries to
            the concerned manager. We hope that you find this task to your
            liking and appreciate the efforts behind such an activity. POINT
            DISTRIBUTION Participation : Sum of 1000 points for each team (Exact
            shares will depend on the individual contributions) Round -2 : Sum
            of 5000 points for each team going to round 2 (Exact shares will
            depend on the individual effort and performance in the second
            round). Round -3 : Sum of 10000 points for each team going to round
            2 (Exact shares will depend on the individual effort and performance
            in the third round). Winners : Every member of the team will get
            2500 points. Runner-Ups : Every member of the team will get 2000
            points. 3rd Position : Every member of the team will get 1500
            points. For Example : A member from the Winner team will
            earn(assuming equal contributions) = 200 + 1000 + 2000 + 2500 = 5700
            Points
          </Text>
        </Container>
      </Center>
    );
  }
}

export default Task;
