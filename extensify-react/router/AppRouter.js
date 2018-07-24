import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import ExpensifyCreateDashboard from '../components/ExpensifyCreate';
import ExpensifyDashboard from '../components/Expensify';
import NotFoundPage from '../components/Notfound';
import EditExpensify from '../components/EditExpensify';


const AppRouter = () => (
   
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
        <Route path="/" component={ ExpensifyDashboard } exact={true}/>
        <Route path="/create" component={ ExpensifyCreateDashboard } />
        <Route path="/edit/:id" component={ EditExpensify} />
        <Route component={NotFoundPage}/>
        </Switch>
        </div>
    </BrowserRouter>
    
);
export default AppRouter;