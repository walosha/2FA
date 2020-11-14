import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import SignIn from "./pages/login";
import Register from "./pages/register";
import forgetPassword from "./pages/forgetPassword";
import HomePage from "./pages/homePage";
import history from "./history";

const App = () => {
  const { token } = useSelector(({ user }) => ({ token: user.token }));
  return (
    <Router history={history}>
      <Switch>
        {token ? (
          <Route path="/" component={HomePage}></Route>
        ) : (
          <>
            <Route exact path="/" component={SignIn}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route
              exact
              path="/forgetPassword"
              component={forgetPassword}
            ></Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
