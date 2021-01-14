import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
//import { Divider } from "@chakra-ui/react";

export class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Divider /> */}
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default BaseLayout;
