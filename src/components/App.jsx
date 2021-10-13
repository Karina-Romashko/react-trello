


import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoginPage } from 'components/LoginPage';
import { HomePage } from 'components/HomePage';
import { RegisterPage } from 'components/RegisterPage';
import React from 'react';
import { MainPage } from 'components/MainPage/MainPage';
import { Redirect } from "react-router"




export class App extends React.Component  {
state = {
  isAuth: false,
}

  render(){
    return (
    <Router>
  <Switch>
    <Route path="/mainpage" >
    {this.state.isAuth ? <MainPage /> : <Redirect to="/loginpage"/>},
    </Route>
    <Route path="/loginpage" >
    {this.state.isAuth ? <Redirect to="/mainpage"/> : <LoginPage />},
    </Route>
    
    <Route path="/registerpage">
      <RegisterPage/>,
    </Route>
<Route path="">
      <HomePage/>,
    </Route>
  </Switch>
</Router>
    
  )
  }
  
}


