import {RECEIVE_PAYMENT} from '../actions/payment_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PAYMENT:
            return Object.assign({}, state, { [action.payment.id]: action.payment });
        default:
            return state;
    }
}