import * as ApiUtil from '../util/friends_api_util';
import { receiveCurrentUser} from './session_actions';


export const addFriend = friend => dispatch => (
    ApiUtil.addFriend(friend).then(user => {
        dispatch(receiveCurrentUser(user));   
    })
);

export const acceptFriend = friend => dispatch => (
    ApiUtil.acceptFriend(friend).then(user => {
        dispatch(receiveCurrentUser(user));
    })
);

export const removeFriend = id => dispatch => (
    ApiUtil.removeFriend(id).then(user => {
        dispatch(receiveCurrentUser(user));
    })
);
