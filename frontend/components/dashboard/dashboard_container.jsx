import { logout } from '../../actions/session_actions';
import Dashboard from './dashboard';
import { connect } from 'react-redux';
import {openModal} from '../../actions/modal_actions';
const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);