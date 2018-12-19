import FriendShow from './friends';
import { connect } from 'react-redux';
import {logout} from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    friend: state.entities.users[ownProps.match.params.friendId]
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout),
    openModal: modal => dispatch(openModal(modal))
    

})

export default connect(mapStateToProps, mapDispatchToProps)(FriendShow);