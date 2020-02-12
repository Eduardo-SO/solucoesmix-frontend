// Register
export function registerCustomerRequest(
    id,
    name,
    responsible,
    cpf_cnpj,
    value,
    contract_due,
    comments
) {
    return {
        type: '@customer/REGISTER_CUSTOMER_REQUEST',
        payload: {
            id,
            name,
            responsible,
            cpf_cnpj,
            value,
            contract_due,
            comments,
        },
    };
}

export function registerCustomerSuccess() {
    return {
        type: '@customer/REGISTER_CUSTOMER_SUCCESS',
    };
}

export function registerCustomerFailure() {
    return {
        type: '@customer/REGISTER_CUSTOMER_FAILURE',
    };
}
