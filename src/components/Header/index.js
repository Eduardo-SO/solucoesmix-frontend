import React from 'react';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/img/logo.png';

export default function Header() {
    return (
        <Container>
            <Content>
                <img src={logo} alt="Soluções Mix" />
                <Profile>
                    <strong>Eduardo Souza</strong>
                    <span>Sair do sistema</span>
                </Profile>
            </Content>
        </Container>
    );
}
