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
      <>
      <Header />
      <Router history={history}>
        <Redirector />

        <Switch>
          <Route exact path="/" component={Home} /> 
        </Switch>
     
      </Router>
   </>
    );
  }
}

const mapStateToProps = state => {
  return {
    // isAuthenticated: state.auth.token
  };
};
export default connect(null, null)(BaseRouter);



