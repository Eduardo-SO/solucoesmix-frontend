import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import { Wrapper } from './styles';

export default function MainLayout({ children }) {
    return (
        <Wrapper>
            <Header />
            {children}
        </Wrapper>
    );
}

MainLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
