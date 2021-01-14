import React, { Component } from "react";
import { Button, Flex, Box } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./footer.css";

export class Footer extends Component {
  render() {
    return (
      <Flex
        pb="50px"
        direction={["column", "column", "row"]}
        className="footer-flex"
      >
        <div className="left-col col-12 col-md-8">
          <h3>
            <strong>Elan &amp; ηVision</strong>
          </h3>
          <h4>Get Recognized.</h4>
          <h4>Build your Network.</h4>
          <h4>Stand out from the crowd.</h4>
        </div>

        <Flex my="auto" mx="auto" direction="column" className="right-col">
          <Box h={["10px", "25px", "150px"]}></Box>
          <Flex direction={["column", "column", "row"]} justify="space-around">
            <Box
              m="20px"
              w="200px"
              className="offset-2 col-5 social-thumb col-md-6 offset-md-0   "
            >
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/elan.iithyderabad"
              >
                <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
                  Facebook
                </Button>
              </a>
            </Box>
            <Box w="200px" m="20px" className="col-5 social-thumb  col-md-6">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/elan_nvision.iith/"
              >
                <Button w="130px" colorScheme="pink" leftIcon={<FaInstagram />}>
                  Instagram
                </Button>
              </a>
            </Box>
          </Flex>
          {/* <div className='row social-links'> */}

          <Flex direction={["column", "column", "row"]}>
            <Box
              w="200px"
              m="20px"
              className="offset-2 col-5 social-thumb  col-md-6 offset-md-0"
            >
              <a
                rel="noreferrer"
                target="_blank"
                href="https://twitter.com/elan_nvision?lang=en"
              >
                <Button
                  w="130px"
                  colorScheme="twitter"
                  leftIcon={<FaTwitter />}
                >
                  Twitter
                </Button>
              </a>
            </Box>
            <Box w="200px" m="20px" className="col-5 social-thumb col-md-6 ">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.youtube.com/user/ElanIITHyderabad"
              >
                <Button w="130px" colorScheme="red" leftIcon={<FaYoutube />}>
                  Youtube
                </Button>
              </a>
            </Box>
          </Flex>

          {/* </div> */}
        </Flex>
      </Flex>
    );
  }
}

export default Footer;
