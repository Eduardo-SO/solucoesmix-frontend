import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import NotFound from '../pages/NotFound';
import Customers from '../pages/Customers';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/customers" component={Customers} isPrivate />
            <Route path="/" component={NotFound} />
        </Switch>
    );
}
