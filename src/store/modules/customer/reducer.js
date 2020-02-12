import { produce } from 'immer';

const INITIAL_STATE = {
    loading: false,
};

export default function customer(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@customer/REGISTER_CUSTOMER_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@customer/REGISTER_CUSTOMER_SUCCESS': {
                draft.loading = false;
                break;
            }
            case '@customer/REGISTER_CUSTOMER_FAILURE': {
                draft.loading = false;
                break;
            }
            default:
        }
    });
}
