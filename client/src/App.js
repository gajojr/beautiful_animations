import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage.component';
import LoginPage from '../src/components/LoginPage/LoginPage.component';
import RegisterPage from '../src/components/RegisterPage/RegisterPage.component';
import UserPage from '../src/components/UserPage/UserPage.component';

// import './App.css';

import LoginFailedComponent from '../src/components/LoginFailed/LoginFailed.component';
import RegisterFailedComponent from '../src/components/RegisterFailed/RegisterFailed.component';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/user-page" component={UserPage}/>
          <Route path="/register-failed" component={RegisterFailedComponent}/>
          <Route path="/login-failed" component={LoginFailedComponent}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
