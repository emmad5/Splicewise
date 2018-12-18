import UsersList from './users_list';
import { connect } from 'react-redux';
import {fetchUsers} from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
    users: Object.values(state.entities.users),
    friends: state.entities.users[state.session.id].friends,
    pendingFriends: state.entities.users[state.session.id].pendingFriends
});

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);