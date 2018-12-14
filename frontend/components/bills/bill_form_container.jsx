import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import BillForm from './bill_form';
import { createBill, clearBillErrors } from '../../actions/bill_actions';

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = dispatch => {
    return {
        createBill: (bill) => dispatch(createBill(bill)),
        closeModal: () => dispatch(closeModal()),
        clearBillErrors: () => dispatch(clearBillErrors()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BillForm);