import { all, takeLatest, put, call } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
        email,
        password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
        console.tron('O usuário não é um prestador de serviços');
    }

    yield put(signInSuccess(token, user));

    history.push('/customers');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
