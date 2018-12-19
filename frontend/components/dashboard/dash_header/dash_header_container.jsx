import DashHeader from './dash_header';
import { connect } from 'react-redux';
import {openModal } from '../../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => ({
    friend: ownProps.friend,
    currentUser: state.entities.users[state.session.id],
    payments: Object.values(state.entities.payments)
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(DashHeader);