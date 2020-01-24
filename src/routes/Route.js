import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Customers from '../pages/Customers';
import SignIn from '../pages/SignIn';

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

    return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
    isPrivate: PropTypes.bool,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};
