import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import EditBillForm from './edit_bill_form';
import { updateBill, clearBillErrors, fetchBill } from '../../actions/bill_actions';

const mapStateToProps = (state, ownProps) => {
    
    return  {
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateBill: (bill) => dispatch(updateBill(bill)),
        closeModal: () => dispatch(closeModal()),
        clearBillErrors: () => dispatch(clearBillErrors()),
        fetchBill: (id) => dispatch(fetchBill(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBillForm);