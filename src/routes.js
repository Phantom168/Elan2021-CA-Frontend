import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import BaseLayout from "./layout/baseLayout";
import Home from "./screens/home";
import Leaderboard from "./screens/leaderboard";
import Profile from "./screens/profile";
import Tasks from "./screens/tasks";
import Comments from "./screens/comments";

export class BaseRouter extends Component {
  render() {
    return (
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/leaderboard" component={Leaderboard} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/comments" component={Comments} />
        </Switch>
      </BaseLayout>
    );
  }
}

export default BaseRouter;
