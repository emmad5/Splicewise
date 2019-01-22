import * as ApiUtil from '../util/payment_api_util';
export const RECEIVE_PAYMENT = 'RECEIVE_PAYMENT';
export const RECEIVE_PAYMENTS = 'RECEIVE_PAYMENTS';
export const RECEIVE_PAYMENT_ERRORS = 'RECEIVE_PAYMENT_ERRORS';

const receivePayment = (payment) => ({
    type: RECEIVE_PAYMENT,
    payment
});
const receivePayments = (payments) => ({
    type: RECEIVE_PAYMENTS,
    payments
});

export const createPayment = payment => dispatch => (
    ApiUtil.createPayment(payment).then(payment => {
        dispatch(receivePayment(payment));
        return payment;
    }).fail(err => dispatch(receivePaymentErrors(err.responseJSON)))
);
export const fetchPayments = () => dispatch => (
    ApiUtil.fetchPayments().then(payments => {
        dispatch(receivePayments(payments));
        return payments;
    })
);

export const receivePaymentErrors = (errors) => {
    return ({
        type: RECEIVE_PAYMENT_ERRORS,
        errors
    })
}

