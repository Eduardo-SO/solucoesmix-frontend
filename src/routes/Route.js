import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Customers from '../pages/Customers';
import SignIn from '../pages/SignIn';

import MainLayout from '../pages/_layouts/Main';
import AuthLayout from '../pages/_layouts/Auth';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const signed = false;

    if (isPrivate && !signed) {
        return <Redirect to={SignIn} />;
    }

    if (!isPrivate && signed) {
        return <Redirect to={Customers} />;
    }

    const Layout = signed ? MainLayout : AuthLayout;

    return (
        <Route
            {...rest}
            render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}

RouteWrapper.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
    isPrivate: PropTypes.bool,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};
