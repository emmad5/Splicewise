import * as ApiUtil from '../util/bill_api_util';
export const RECEIVE_BILL = 'RECEIVE_BILL';
export const RECEIVE_BILL_ERRORS = 'RECEIVE_BILL_ERRORS';
export const DELETE_BILL = 'DELETE_BILL';
export const CLEAR_BILL_ERRORS = 'CLEAR_BILL_ERRORS';
export const RECEIVE_BILLS = 'RECEIVE_BILLS';

export const createBill = bill => dispatch => (
    ApiUtil.createBill(bill).then(bill => {
        dispatch(receiveBill(bill));
        return bill;
    }).fail(err => dispatch(receiveBillErrors(err.responseJSON)))
);


export const deleteBill = (id) => dispatch => (
    ApiUtil.deleteBill(id).then((bill) => (dispatch(removeBill(bill.id))))
);

export const updateBill = (bill) => dispatch => (
    ApiUtil.updateBill(bill).then(bill => dispatch(receiveBill(bill)), errors => dispatch(receiveBillErrors(errors.responseJSON)))
);

export const fetchBill = (id) => dispatch => (
    ApiUtil.fetchBill(id).then(bill => dispatch(receiveBill(bill)), errors => dispatch(receiveBillErrors(errors.responseJSON)))
);

export const fetchBills = () => dispatch => (
    ApiUtil.fetchBills().then(bills => dispatch(receiveBills(bills)))
);

const receiveBill = (bill) => ({
    type: RECEIVE_BILL,
    bill
});


const receiveBills = (bills) => ({
    type: RECEIVE_BILLS,
    bills: bills
});

const removeBill = (billId) => ({
    type: DELETE_BILL,
    billId
});

export const receiveBillErrors = (errors) => ({
    type: RECEIVE_BILL_ERRORS,
    errors
});

export const clearBillErrors = () => ({
    type: CLEAR_BILL_ERRORS,
});