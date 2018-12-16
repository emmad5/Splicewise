import * as ApiUtil from '../util/payment_api_util';
export const RECEIVE_PAYMENT = 'RECEIVE_PAYMENT';
export const RECEIVE_PAYMENT_ERRORS = 'RECEIVE_PAYMENT_ERRORS';

const receivePayment = (payment) => ({
    type: RECEIVE_PAYMENT,
    payment
});

export const createPayment = payment => dispatch => (
    ApiUtil.createPayment(payment).then(payment => {
        dispatch(receivePayment(payment));
        return payment;
    }).fail(err => dispatch(receivePaymentErrors(err.responseJSON)))
);

export const receivePaymentErrors = (errors) => {
    debugger
    return ({
    type: RECEIVE_PAYMENT_ERRORS,
    errors
})
}

