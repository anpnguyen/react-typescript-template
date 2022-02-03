import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DevelopersGallery from '../pages/public/DevelopersGallery';
import LandingPage from './../pages/public/LandingPage';

export default function PublicRoutes(): JSX.Element {
    return (
        <Switch>
            <Route exact path="/landing" component={DevelopersGallery} />
            <Route exact path="/" component={LandingPage} />
            {/* <Route exact path="/gallery" component={DevelopersGallery} /> */}
        </Switch>
    );
}
