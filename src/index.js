import ReactDOM from 'react-dom';
import { App } from './components';
 import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoginPage } from 'components/LoginPage';
import { HomePage } from 'components/HomePage';
import { RegisterPage } from 'components/RegisterPage';

ReactDOM.render(
<Router>
  <Switch>
    <Route path="/mainpage" >
    <App/>,
    </Route>
    <Route path="/loginpage" >
    <LoginPage/>,
    </Route>
    
    <Route path="/registerpage">
      <RegisterPage/>,
    </Route>
<Route path="">
      <HomePage/>,
    </Route>
  </Switch>
</Router>,

  
  document.getElementById('root')

);

