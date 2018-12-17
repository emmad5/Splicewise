import React from 'react';
import { connect } from 'react-redux';
import BillShow from './bill_show';
import {fetchPayments} from '../../actions/payment_actions';
import {selectBillPayments} from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
    const payments = selectBillPayments(state.entities.payments, ownProps.bill);
    
    return {
        payments: payments,
        statepayments: state.entities.payments
    };
   
};

const mapDispatchToProps = dispatch => ({
    fetchPayments: () => dispatch(fetchPayments())

});

export default connect(mapStateToProps, mapDispatchToProps)(BillShow);