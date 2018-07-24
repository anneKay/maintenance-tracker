import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../components/pages/LandingPage';
import LoginPage from '../components/pages/LoginPage';
import Signup from '../components/pages/SignupPage';


const AppRouter = () => (

  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  </BrowserRouter>

);
export default AppRouter;
