import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/img/logo.png';

// import { Container } from './styles';

export default function SignIn() {
    return (
        <>
            <img src={logo} alt="Soluções Mix" />
            <hr />
            <Form>
                <div className="input-block">
                    <span>Seu Email</span>
                    <Input id="email" name="email" />
                </div>
                <div className="input-block">
                    <span>Sua Senha</span>
                    <Input
                        type="password"
                        id="email"
                        name="email"
                        placeholder="••••••••"
                    />
                </div>

                <button type="submit">Entrar</button>
            </Form>
        </>
    );
}
