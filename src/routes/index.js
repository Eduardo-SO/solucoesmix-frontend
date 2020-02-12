import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import NotFound from '../pages/NotFound';

import Customers from '../pages/Customers';
import Customer from '../pages/Customer';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" component={SignUp} />

            <Route path="/customers" component={Customers} isPrivate />
            <Route path="/customer" component={Customer} isPrivate />

            <Route path="/" component={NotFound} />
        </Switch>
    );
}
