import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styles';

export default function MainLayout({ children }) {
    return <Wrapper>{children}</Wrapper>;
}

MainLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
