import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import NotFoundPage from '../components/Notfound';
import SinglePortfolio from '../components/SinglePortfolio';
import Home from '../components/Home';


const AppRouter = () => (
   
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
        <Route path="/" component={ Home } exact={true}/>
        <Route path="/portfolio" component={ Portfolio } exact={true}/>
        <Route path="/contact" component={ Contact} />
        <Route path="/portfolio/:id" component={SinglePortfolio} />
        <Route component={NotFoundPage}/>
        </Switch>
        </div>
    </BrowserRouter>
    
);
export default AppRouter;