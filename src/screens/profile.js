import React, { Component } from "react";
import {
  Box,
  Center,
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Text,

  //createStandaloneToast,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex,
  Stack,
  Container,
} from "@chakra-ui/react";
import axios from "axios";
import { AppContext } from "../App";
import { withAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router-dom";
import { caportal } from "../constants";

//var flag=1;

// const updateProfile = (state,setState) => {

// };

// function setNameInContext(name,status){
//   const contextVal = useContext(AppContext)
//   contextVal.setName(name)
//   console.log(contextVal.name)
//   contextVal.setProfileStatus(status)
// }

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
      score: 0,
      err_name: "",
      err_email: "",
      err_phone: "",
      err_facebook: "",
      err_instagram: "",
      err_institute: "",
      loading: false,
      error: ",",
    };

    // if(!token){

    // }

    const { getAccessTokenSilently } = this.props.auth0;

    (async () => {
      try {
        await getAccessTokenSilently().then((token) => {
          axios
            .post(`${caportal}/addNewAmbassador/`, {
              access_token: token,
            })
            .then((res) => {
              console.log(res);
              if (res.status == 200) {
                var currToken = res.data.token;
                console.log(currToken);

                axios
                  .get(`${caportal}/getMyAmbassadorProfile/`, {
                    headers: {
                      Authorization: `Token ${currToken}`,
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
                      score: res.data.score,
                      loading: false,
                    });

                    console.log(this.state);
                  });
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
    //const toast = createStandaloneToast();

    return (
      <>
        {this.state.loading && (
          <Center>
            <Spinner size="xl" />
          </Center>
        )}
        {!this.state.loading && (
          <>
            <AppContext.Consumer>
              {({ isLoggedIn }) => {
                if (!isLoggedIn) return <Redirect to="/" />;
                // else if(!isProfileComplete){

                // }
              }}
            </AppContext.Consumer>
            <Box pt={25} bg={"gray.100"}>
              <Center>
                <Heading>Profile</Heading>
              </Center>

              <AppContext.Consumer>
                {({ isProfileComplete }) => {
                  if (!isProfileComplete) {
                    return (
                      <Container mt="20px">
                        <Alert flexDirection="column" status="warning">
                          <AlertIcon />
                          <AlertTitle mr="2">Complete your Profile</AlertTitle>
                          <AlertDescription>
                            Fill in your details to complete your profile and
                            move ahead
                          </AlertDescription>
                        </Alert>
                      </Container>
                    );
                  }
                }}
              </AppContext.Consumer>

              {/* <Container mt={75} maxW={["100%", "50%"]}> */}

              <Flex minH={"100vh"} align={"center"} justify={"center"}>
                <Stack
                  spacing={8}
                  mx={"auto"}
                  w={"full"}
                  maxW={"md"}
                  py={12}
                  px={6}
                >
                  <Box
                    rounded={"lg"}
                    bg={"white"}
                    boxShadow={"lg"}
                    p={{ base: 4, md: 8 }}
                  >
                    <Stack spacing={4}>
                      <FormControl m={5} ml={"0"} id="points">
                        <FormLabel>Points</FormLabel>
                        <Input disabled defaultValue={this.state.score} />
                      </FormControl>

                      <FormControl m={5} ml={"0"} id="name" isRequired>
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
                            const {
                              name,
                              phone,
                              facebook,
                              instagram,
                              institute,
                            } = this.state;

                            const token = localStorage.getItem("ca_token");
                            this.setState({ loading: true });
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
                                this.setState({
                                  loading: false,
                                });

                                // <AppContext.Consumer>
                                //   {({setProfileStatus,setName,name})=>{
                                //     setProfileStatus(res.data.is_profile_complete)
                                //     setName(res.data.name)
                                //     console.log(name)
                                //   }}
                                // </AppContext.Consumer>
                                window.location.reload();
                              })
                              .catch((err) => {
                                console.error(err);
                              });
                          }
                        }}
                      >
                        Update
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Flex>

              {/* </Container> */}
            </Box>
          </>
        )}
      </>
    );
  }
}

export default withAuth0(Profile);
