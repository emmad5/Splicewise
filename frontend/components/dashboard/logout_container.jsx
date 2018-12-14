import { logout } from '../../actions/session_actions';
import Logout from './logout';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout);