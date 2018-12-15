import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import EditBillForm from './edit_bill_form';
import { updateBill, clearBillErrors } from '../../actions/bill_actions';

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = dispatch => {
    return {
        updateBill: (bill) => dispatch(updateBill(bill)),
        closeModal: () => dispatch(closeModal()),
        clearBillErrors: () => dispatch(clearBillErrors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBillForm);