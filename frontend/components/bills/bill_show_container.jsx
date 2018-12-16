import React from 'react';
import { connect } from 'react-redux';
import BillShow from './bill_show';


const mapStateToProps = (state) => ({
    payments: state.entities.payments
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(BillShow);