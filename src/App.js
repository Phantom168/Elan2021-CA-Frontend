/* eslint-disable no-unused-labels */
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import "./App.css";

export const AppContext = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn:
        localStorage.getItem("ca_token") &&
        localStorage.getItem("ca_token") !== "",
      firstLogin: false,
      token: null,
      setToken: (val) => {
        this.setState({ token: val });
      },
      setFirstLogin: (val) => {
        this.setState({ firstLogin: val });
      },
      name: "Guest",
      setName: (n) => {
        this.setState({ name: n });
      },
      dp: "",
      logIn: () => {
        this.setState({ isLoggedIn: true });
      },
      logOut: () => {
        this.setState({ isLoggedIn: false });
      },
      isProfileComplete: false,
      setProfileStatus: (val) => {
        this.setState({ isProfileComplete: val });
      },
      currentTab: 1,
      setCurrentTab: (val) => {
        this.setState({ currentTab: val });
      },
    };
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Router>
          <BaseRouter />
        </Router>
      </AppContext.Provider>
    );
  }
}

export default App;
