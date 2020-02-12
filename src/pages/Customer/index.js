import React from 'react';

import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { registerCustomerRequest } from '~/store/modules/customer/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
    id: Yup.number()
        .typeError('• Valor não informado')
        .required('• Campo obrigatório'),
    name: Yup.string().required('• Campo obrigatório'),
    responsible: Yup.string(),
    cpf_cnpj: Yup.string()
        .min(11, '• 11 carácteres necessários')
        .notRequired(),
    value: Yup.number().typeError('• Valor não informado'),
    contract_due: Yup.date().typeError('• Data não informada'),
    comments: Yup.string(),
});

export default function Customer() {
    const dispatch = useDispatch();

    function handleSubmit({
        id,
        name,
        responsible,
        cpf_cnpj,
        value,
        contract_due,
        comments,
    }) {
        dispatch(
            registerCustomerRequest(
                id,
                name,
                responsible,
                cpf_cnpj,
                value,
                contract_due,
                comments
            )
        );
    }

    return (
        <Container>
            <header>
                <h1>Adicionando Cliente</h1>
            </header>

            <hr />

            <Form schema={schema} onSubmit={handleSubmit}>
                <div className="input-block">
                    <p>ID</p>
                    <Input name="id" placeholder="978" type="number" />
                </div>

                <div className="input-block">
                    <p>NOME</p>
                    <Input name="name" placeholder="JJA Caçambas" />
                </div>

                <div className="input-block">
                    <p>RESPONSÁVEL</p>
                    <Input name="responsible" placeholder="Josevaldo Ramos" />
                </div>

                <div className="input-block">
                    <p>CNPJ / CPF</p>
                    <Input name="cpf_cnpj" placeholder="123456789" />
                </div>

                <div className="input-block">
                    <p>VALOR</p>
                    <Input name="value" placeholder="1500" type="number" />
                </div>

                <div className="input-block">
                    <p>DATA DO CONTRATO</p>
                    <Input
                        name="contract_due"
                        placeholder="10/10/20"
                        type="date"
                    />
                </div>

                <div className="input-block">
                    <p>COMENTÁRIOS</p>
                    <Input
                        name="comments"
                        placeholder="Apenas site..."
                        multiline
                    />
                </div>
                <button type="submit">Salvar</button>
            </Form>
        </Container>
    );
}
