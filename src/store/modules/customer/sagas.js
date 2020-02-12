import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { registerCustomerSuccess, registerCustomerFailure } from './actions';

export function* registerCustomer({ payload }) {
    try {
        const {
            id,
            name,
            responsible,
            cpf_cnpj,
            value,
            contract_due,
            comments,
        } = payload;

        yield call(api.post, 'customers', {
            id,
            name,
            responsible,
            cpf_cnpj,
            value,
            contract_due,
            comments,
        });

        toast.success('Cliente cadastrado com sucesso!');

        yield put(registerCustomerSuccess());

        history.push('/customers');
    } catch (err) {
        toast.error('Falha no cadastro, tente novamente');

        yield put(registerCustomerFailure());
    }
}

export default all([
    takeLatest('@customer/REGISTER_CUSTOMER_REQUEST', registerCustomer),
]);
