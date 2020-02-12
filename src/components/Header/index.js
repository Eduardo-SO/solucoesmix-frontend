import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/img/logo.png';

export default function Header() {
    return (
        <Container>
            <Content>
                <Link to="/customers">
                    <img src={logo} alt="Soluções Mix" />
                </Link>
                <Profile>
                    <strong>Eduardo Souza</strong>
                    <span>Sair do sistema</span>
                </Profile>
            </Content>
        </Container>
    );
}
