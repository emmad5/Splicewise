import { RECEIVE_CURRENT_USER, RECEIVE_USERS } from '../actions/session_actions';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
           return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_USERS:
            return action.users;
        default:
            return state;
    }
};

export default usersReducer;