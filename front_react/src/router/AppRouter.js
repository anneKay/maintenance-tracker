import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Landing from '../components/pages/LandingPage';
import LoginPage from '../components/pages/LoginPage';
import Signup from '../components/pages/SignupPage';
import store from '../store/store';

const AppRouter = () => (
  <Provider store={store}>
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  </BrowserRouter>
</Provider>
);
export default AppRouter;
