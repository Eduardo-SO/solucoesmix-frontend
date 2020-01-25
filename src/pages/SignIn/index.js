import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/img/logo.png';

export default function SignIn() {
    const schema = Yup.object().shape({
        email: Yup.string()
            .email('• Email inválido')
            .required('• Campo obrigatório'),
        password: Yup.string().required('• Campo obrigatório'),
    });

    function handleSubmit(data) {
        console.tron.log(data);
    }

    return (
        <>
            <img src={logo} alt="Soluções Mix" />
            <hr />
            <Form schema={schema} onSubmit={handleSubmit}>
                <div className="input-block">
                    <p>Seu Email</p>
                    <Input name="email" />
                </div>
                <div className="input-block">
                    <p>Sua Senha</p>
                    <Input
                        type="password"
                        name="password"
                        placeholder="••••••"
                    />
                </div>

                <button type="submit">Entrar</button>
            </Form>
        </>
    );
}
