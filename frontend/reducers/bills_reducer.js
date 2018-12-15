import { RECEIVE_BILL, DELETE_BILL, RECEIVE_BILLS} from '../actions/bill_actions';


export default (state = {}, action) => {
    
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BILL:
            return Object.assign({}, state, {[action.bill.id]: action.bill});
        case DELETE_BILL:
            let newState =  Object.assign({}, state);
            delete newState[action.billId];
            return newState;
        case RECEIVE_BILLS:
            return action.bills;
        default:
            return state;
    }
};