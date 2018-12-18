
import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import billsReducer from './bills_reducer';
import paymentsReducer from './payments_reducer';

export default combineReducers({
    users: usersReducer,
    bills: billsReducer,
    payments: paymentsReducer
});

