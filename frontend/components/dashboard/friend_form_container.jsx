import FriendForm from './friend_form'
import { connect } from 'react-redux';
import { addFriend } from '../../actions/friend_actions';
import {closeModal} from '../../actions/modal_actions';
import {clearErrors} from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    errors: state.errors.session
});

const mapDispatchToProps = (dispatch) => ({
    addFriend: (friend) => dispatch(addFriend(friend)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendForm);