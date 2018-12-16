import * as ApiUtil from '../util/payment_api_util';
export const RECEIVE_PAYMENT = 'RECEIVE_PAYMENT';

const receivePayment = (payment) => ({
    type: RECEIVE_PAYMENT,
    payment
});

export const createPayment = payment => dispatch => (
    ApiUtil.createPayment(payment).then(payment => {
        dispatch(receivePayment(payment));
        return payment;
    })
);
