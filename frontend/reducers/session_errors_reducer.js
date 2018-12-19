import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import {RECEIVE_BILL_ERRORS} from '../actions/bill_actions';
import {RECEIVE_PAYMENT_ERRORS} from '../actions/payment_actions';
import { RECEIVE_FRIEND_ERRORS } from '../actions/friend_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        case RECEIVE_BILL_ERRORS:
            return action.errors;
        case RECEIVE_PAYMENT_ERRORS:
            return action.errors;
        case RECEIVE_FRIEND_ERRORS:
            return action.errors;
        default:
            return state;
    }
}