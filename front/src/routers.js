import React from "react";
import { Router, Route, Switch } from "react-router";
import Home from "./screens/home";
import Header from "./components/header";
import { Redirector } from "react-router-redirect";
import { createBrowserHistory } from "history";
import { connect } from "react-redux";
const history = createBrowserHistory();

class BaseRouter extends React.Component {
  render() {
    return (
    <React.Fragment>
      <Header />
      <Router history={history}>
        <Redirector />
        <Switch>
          <Route exact path="/" component={Home} /> 
        </Switch>
      </Router>
    </React.Fragment>
    );
  }
}
export default connect(null, null)(BaseRouter);



