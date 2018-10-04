import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Landing from '../components/pages/LandingPage';
import LoginPage from '../components/pages/LoginPage';
import Signup from '../components/pages/SignupPage';
import store from '../store/store';
import CreateReq from '../components/pages/CreateReq';
import Profile from '../components/pages/Profile';
import { setCurrentUser } from '../helpers/helper';
import Request from '../components/pages/Request';
import EditRequest from '../components/pages/EditRequest';

//setCurrentUser();
const AppRouter = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/create" component={CreateReq} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/request/:id" component={Request} />
        <Route exact path="/edit/:id" component={EditRequest} />
      </Switch>
    </BrowserRouter>
  </Provider>
);
export default AppRouter;
