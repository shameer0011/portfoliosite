import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../components/notFound';
import Header from '../components/header';
import HomePage from '../components/homePage';
import ContactPage from '../components/contactPage';
import PortfolioPage from '../components/portfolioPage';
import PortfolioPageItem from '../components/portfolioPageItem';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={ HomePage } exact={ true } />
                    <Route path="/contact" component={ ContactPage } />
                    <Route path="/portfolio" component={ PortfolioPage } exact={ true } />
                    <Route path="/portfolio/:id" component={ PortfolioPageItem } />
                    <Route component={ NotFound } />

                </Switch>
            </div>
        </BrowserRouter>
    )
}
export default AppRouter;