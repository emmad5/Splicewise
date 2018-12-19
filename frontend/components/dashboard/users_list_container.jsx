import UsersList from './users_list';
import { connect } from 'react-redux';
import {fetchUsers} from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';
import {acceptFriend} from '../../actions/friend_actions';

const mapStateToProps = (state) => ({
    users: Object.values(state.entities.users),
    friends: state.entities.users[state.session.id].friends,
    friendRequests: state.entities.users[state.session.id].friendRequests
});

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    openModal: (modal) => dispatch(openModal(modal)),
    acceptFriend: (friend) => dispatch(acceptFriend(friend))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);