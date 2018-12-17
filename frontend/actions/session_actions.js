import * as ApiUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const LOGOUT_USER = 'LOGOUT_USER';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_USERS = 'RECEIVE_USERS';


export const login = user => dispatch => (
    ApiUtil.login(user).then(user => (dispatch(receiveCurrentUser(user))), errors => (dispatch(receiveErrors(errors.responseJSON))))
);

export const logout = () => dispatch => (
    ApiUtil.logout().then(() => (dispatch(logoutCurrentUser())))
);

export const signup = (user) => dispatch => (
    ApiUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)))
);
export const fetchUsers = () => dispatch => {
    
   return  ApiUtil.fetchUsers().then(users => dispatch(receiveUsers(users)))
}

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
})

const logoutCurrentUser = () => ({
    type: LOGOUT_USER
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
});