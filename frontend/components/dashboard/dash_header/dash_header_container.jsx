import DashHeader from './dash_header';
import { connect } from 'react-redux';
import {openModal } from '../../../actions/modal_actions'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(DashHeader);