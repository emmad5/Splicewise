import * as ApiUtil from '../util/friends_api_util';
import { receiveCurrentUser} from './session_actions';


export const addFriend = friend => dispatch => (
    ApiUtil.addFriend(friend).then(user => {
        dispatch(receiveCurrentUser(user));   
    })
);
