import React, { Component } from "react";
import Task from "../components/task";
import axios from "axios";
import { AppContext } from "../App";
import { Redirect } from "react-router-dom";
import { caportal } from "../constants";

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
        {this.state.data &&
          this.state.data.map((item, index) => {
            return <Task key={index} {...item} />;
          })}
      </>
    );
  }
}

export default Tasks;
