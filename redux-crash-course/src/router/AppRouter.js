import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Posts from '../components/main/Posts';
import PostForm from '../components/main/Postform';
import store from '../store/store' 

const AppRouter = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/login" component={PostForm} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default AppRouter;
