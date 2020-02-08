import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '../../assets/img/logo.png';

const schema = Yup.object().shape({
    name: Yup.string().required('• Campo obrigatório'),
    email: Yup.string()
        .email('• Email inválido')
        .required('• Campo obrigatório'),
    password: Yup.string().required('• Campo obrigatório'),
});

export default function SignUp() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ name, email, password }) {
        dispatch(signUpRequest(name, email, password));
    }

    return (
        <>
            <img src={logo} alt="Soluções Mix" />
            <hr />
            <span>Registrar Nova Conta</span>
            <Form schema={schema} onSubmit={handleSubmit}>
                <div className="input-block">
                    <p>Seu Nome</p>
                    <Input
                        name="name"
                        placeholder="Eduardo Souza de Oliveira"
                    />
                </div>
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
                    {loading ? 'Carregando...' : 'Registrar'}
                </button>
            </Form>

            <Link to="/">Fazer Login</Link>
        </>
    );
}
