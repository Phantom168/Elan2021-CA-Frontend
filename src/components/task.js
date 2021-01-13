/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import {
  Flex,
  Center,
  Text,
  Heading,
  Container,
  Divider,
  Badge,
  Box,
  Spacer,
  Stack,
} from "@chakra-ui/react";

export class Task extends Component {
  render() {
    const {
      title,
      description,
      completed,
      max_points,
      points_awarded,
    } = this.props;
    return (
      <Center my={25}>
        <Container borderRadius="5px" maxW={"60%"}>
          <Flex
            py="5px"
            px="10px"
            borderRadius="10px 10px 0px 0px"
            direction="row"
            justify="space-between"
            bgColor="gray.100"
          >
            <Heading>{title}</Heading>
            <Spacer />
            {completed ? (
              <Badge h={"60%"} my="auto" colorScheme="green">
                Completed
              </Badge>
            ) : (
              <Badge h={"60%"} my="auto" colorScheme="red">
                Not Completed
              </Badge>
            )}

            <Badge ml="10px" h={"70%"} my="auto" colorScheme="purple">
              {`${points_awarded}/${max_points}`}
            </Badge>
          </Flex>

          <Divider mb="0px" borderWidth="0px 1px 0px 1px" />
          <Text pt="10px" px="10px" borderWidth="0px 1px 1px 1px">
            {description}
          </Text>
        </Container>
      </Center>
    );
  }
}

export default Task;
