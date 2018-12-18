import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import BillForm from './bill_form';
import { createBill, clearBillErrors } from '../../actions/bill_actions';
import {createPayment} from '../../actions/payment_actions';
import {clearErrors} from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    errors: state.errors.session
})
const mapDispatchToProps = dispatch => {
    return {
        createBill: (bill) => dispatch(createBill(bill)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors()),
        createPayment: (payment) => dispatch(createPayment(payment))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BillForm);