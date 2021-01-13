import React, { Component } from "react";
import {
  Box,
  Center,
  Heading,
  Container,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Text,
  createStandaloneToast,
} from "@chakra-ui/react";
import axios from "axios";
import { AppContext } from "../App";
import { Redirect } from "react-router-dom";
import { caportal } from "../constants";

const updateProfile = (state) => {
  const { name, phone, facebook, instagram, institute } = state;

  const token = localStorage.getItem("ca_token");
  axios
    .post(
      `${caportal}/updateMyAmbassadorProfile/`,
      {
        name,
        phone,
        facebook,
        instagram,
        institute,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

export class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      facebook: "",
      instagram: "",
      institute: "",
      err_name: "",
      err_email: "",
      err_phone: "",
      err_facebook: "",
      err_instagram: "",
      err_institute: "",
    };

    const token = localStorage.getItem("ca_token");

    // if(!token){

    // }

    axios
      .get("http://127.0.0.1:8000/caportal/getMyAmbassadorProfile/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          phone: res.data.phone,
          instagram: res.data.instagram,
          facebook: res.data.facebook,
          institute: res.data.institute,
        });
      });
  }

  updateProfileState = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  checkProfile() {
    const { name, phone, instagram, facebook, institute } = this.state;
    if (name == "") {
      this.setState({ err_name: "Please Enter Yorr Name" });
      return false;
    } else {
      this.setState({ err_name: "" });
    }

    if (institute == "") {
      this.setState({ err_institute: "Please Enter Your School/College Name" });
      return false;
    } else {
      this.setState({ err_institute: "" });
    }

    if (!/^[6789]\d{9}$/.test(phone)) {
      this.setState({
        err_phone: "Please Enter a valid Phone Number linked to your whatsapp",
      });
      return false;
    } else {
      this.setState({ err_phone: "" });
    }
    if (instagram == "" && facebook == "") {
      this.setState({
        err_instagram: "Please Enter at least one of your social media handles",
      });
      return false;
    } else {
      this.setState({ err_instagram: "" });
    }

    return true;
  }

  render() {
    const toast = createStandaloneToast();

    return (
      <>
        {console.log(this.state)}
        <AppContext.Consumer>
          {({ isLoggedIn, firstLogin }) => {
            if (!isLoggedIn) return <Redirect to="/" />;
            if (firstLogin) {
              toast({
                title: "Registered Successfully",
                description: "Please Complete Your Profile to move forward",
                status: "success",
                isClosable: true,
              });
            }
          }}
        </AppContext.Consumer>
        <Box mt={25}>
          <Center>
            <Heading>Profile</Heading>
          </Center>
          <Container mt={75} maxW={["100%", "50%"]}>
            <FormControl m={5} id="name" isRequired>
              <FormLabel>First name</FormLabel>
              <Input
                defaultValue={this.state.name}
                onChange={this.updateProfileState}
              />
              <FormHelperText>
                <Text color="red">{this.state.err_name}</Text>
              </FormHelperText>
            </FormControl>

            <FormControl m={5} id="email">
              <FormLabel>Email</FormLabel>
              <Input disabled defaultValue={this.state.email} />
            </FormControl>

            <FormControl m={5} id="phone" isRequired>
              <FormLabel>Phone</FormLabel>
              <Input
                defaultValue={this.state.phone}
                onChange={this.updateProfileState}
              />
              <FormHelperText color="red">
                <Text color="red">{this.state.err_phone}</Text>
              </FormHelperText>
            </FormControl>

            <FormControl m={5} id="institute" isRequired>
              <FormLabel>School/College</FormLabel>
              <Input
                defaultValue={this.state.institute}
                onChange={this.updateProfileState}
              />
              <FormHelperText color="red">
                <Text color="red" textColor="red">
                  {this.state.err_institute}
                </Text>
              </FormHelperText>
            </FormControl>

            <FormControl m={5} id="instagram">
              <FormLabel>Instagram</FormLabel>
              <Input
                defaultValue={this.state.instagram}
                onChange={this.updateProfileState}
              />
              <FormHelperText color="red">
                <Text color="red">{this.state.err_instagram}</Text>
              </FormHelperText>
            </FormControl>

            <FormControl m={5} id="facebook">
              <FormLabel>FaceBook</FormLabel>
              <Input
                defaultValue={this.state.facebook}
                onChange={this.updateProfileState}
              />
              {/* <FormErrorMessage>{this.state.err_name}</FormErrorMessage> */}
            </FormControl>

            <Button
              m={5}
              colorScheme="teal"
              onClick={() => {
                if (this.checkProfile()) {
                  updateProfile(this.state);
                }
              }}
            >
              Update
            </Button>
          </Container>
        </Box>
      </>
    );
  }
}

export default Profile;
