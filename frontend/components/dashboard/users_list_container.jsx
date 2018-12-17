import UsersList from './users_list';
import { connect } from 'react-redux';
import {fetchUsers} from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    users: Object.values(state.entities.users)
})

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);