import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '../../assets/img/logo.png';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('• Email inválido')
        .required('• Campo obrigatório'),
    password: Yup.string().required('• Campo obrigatório'),
});

export default function SignIn() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    }

    return (
        <>
            <img src={logo} alt="Soluções Mix" />
            <hr />
            <Form schema={schema} onSubmit={handleSubmit}>
                <div className="input-block">
                    <p>Seu Email</p>
                    <Input
                        name="email"
                        placeholder="ex.: contato@solucoesmix.com.br"
                    />
                </div>
                <div className="input-block">
                    <p>Sua Senha</p>
                    <Input
                        type="password"
                        name="password"
                        placeholder="••••••"
                    />
                </div>

                <button type="submit">
                    {loading ? 'Carregando...' : 'Entrar'}
                </button>
            </Form>
        </>
    );
}
