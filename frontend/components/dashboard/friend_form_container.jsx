import FriendForm from './friend_form'
import { connect } from 'react-redux';
import { addFriend } from '../../actions/friend_actions';
import {closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    addFriend: (friend) => dispatch(addFriend(friend)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendForm);