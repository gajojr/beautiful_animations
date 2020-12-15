import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { DashBoard } from "../src/components/dashboard/dashboard.component";
import Login from "../src/components/login/login.component";
import Register from "../src/components/register/register.component";

import jwt_decode from "jwt-decode";
import setAuthToken from "../src/utils/setAuthToken";

async function getFromDB(url) {
  const res = await fetch(url);
  const json = await res.json();
  const animationsList = json.animations;

  return animationsList;
}

function App() {
  // const decoded = jwt_decode(token);
  // console.log(decoded);
  const [UserSession, setUserSession] = useState({});
  useEffect(() => {
    if (localStorage.jwtTokenTeams) {
      const token = JSON.parse(localStorage.jwtTokenTeams);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      setUserSession(decoded);
    } else {
      setUserSession(false);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {/* render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
              */}
        <Switch>
          <Route exact path="/" component={DashBoard} />
          {/* this should */}
          <Route
            exact
            path="/login"
            render={() => (UserSession ? <Redirect to="/" /> : <Login />)}
          />
          <Route
            exact
            path="/register"
            render={() => (UserSession ? <Redirect to="/" /> : <Register />)}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
