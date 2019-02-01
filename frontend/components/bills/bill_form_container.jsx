import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import BillForm from './bill_form';
import { createBill, clearBillErrors } from '../../actions/bill_actions';
import {createPayment} from '../../actions/payment_actions';
import {clearErrors} from '../../actions/session_actions';
import { handleUsers} from '../../reducers/selectors';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    currentUser: state.entities.users[state.session.id],
    users: handleUsers(Object.values(state.entities.users), state.entities.users[state.session.id])
})
const mapDispatchToProps = dispatch => {
    return {
        createBill: (bill) => dispatch(createBill(bill)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors()),
        createPayment: (payment) => dispatch(createPayment(payment)),
        openModal: (modal) => dispatch(openModal(modal))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BillForm);