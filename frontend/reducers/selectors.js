export const selectBillPayments = (payments, bill) => {
    if (bill) {
        return Object.values(payments).filter(payment => payment.billId == bill.id);
    } else {
        return [];
    }

};
