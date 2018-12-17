import {RECEIVE_PAYMENT, RECEIVE_PAYMENTS} from '../actions/payment_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PAYMENT:
            return Object.assign({}, state, { [action.payment.id]: action.payment });
        case RECEIVE_PAYMENTS:
            return action.payments
        default:
            return state;
    }
}