import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import MainLayout from '../pages/_layouts/Main';
import AuthLayout from '../pages/_layouts/Auth';

import { store } from '~store';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const { signed } = store.getState().auth;

    if (!signed && isPrivate) {
        return <Redirect to="/" />;
    }

    if (signed && !isPrivate) {
        return <Redirect to="/customers" />;
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
