import { logout } from '../../actions/session_actions';
import Dashboard from './dashboard';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);