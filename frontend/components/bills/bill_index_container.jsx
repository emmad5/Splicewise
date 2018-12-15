import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import BillIndex from './bill_index';
import { createBill, clearBillErrors, fetchBills, deleteBill } from '../../actions/bill_actions';

const mapStateToProps = (state) => ({
    bills: Object.values(state.entities.bills)
});
const mapDispatchToProps = dispatch => {
    return {
        createBill: (bill) => dispatch(createBill(bill)),
        closeModal: () => dispatch(closeModal()),
        clearBillErrors: () => dispatch(clearBillErrors()),
        fetchBills: () => dispatch(fetchBills()),
        deleteBill: (id) => dispatch(deleteBill(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BillIndex);