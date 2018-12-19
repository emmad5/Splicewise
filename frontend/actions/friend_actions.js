import * as ApiUtil from '../util/friends_api_util';
import { receiveCurrentUser} from './session_actions';
export const RECEIVE_FRIEND_ERRORS = 'RECEIVE_FRIEND_ERRORS';


export const addFriend = friend => dispatch => (
    ApiUtil.addFriend(friend).then(user => {
        dispatch(receiveCurrentUser(user));   
    }).fail(err => dispatch(receiveFriendErrors(err.responseJSON)))
);

export const acceptFriend = friend => dispatch => (
    ApiUtil.acceptFriend(friend).then(user => {
        dispatch(receiveCurrentUser(user));
    }).fail(err => dispatch(receiveFriendErrors(err.responseJSON)))
);

export const removeFriend = id => dispatch => (
    ApiUtil.removeFriend(id).then(user => {
        dispatch(receiveCurrentUser(user));
    }).fail(err => dispatch(receiveFriendErrors(err.responseJSON)))
);

const receiveFriendErrors = (errors) => {
    return ({
        type: RECEIVE_FRIEND_ERRORS,
        errors
    }) 
}