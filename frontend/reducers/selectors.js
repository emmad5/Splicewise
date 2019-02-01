export const selectBillPayments = (payments, bill) => {
    if (bill) {
        return Object.values(payments).filter(payment => payment.billId == bill.id);
    } else {
        return [];
    }

};

export const handleUsers = (users) => {
    let friendOptions = []
    users.forEach(user => {
        friendOptions.push({
            value: user.username,
            label: user.username
        })
    })
    return friendOptions;
}


// export const billsWithFriends = (state, ownProps) => {
//     let payments = Object.values(state.entities.payments).filter(payment => payment.user_id == ownProps.match.params.friendId)
//     let friendsBills = [];
    
//     Object.values(state.entities.bills).forEach(bill => {
//         payments.forEach(payment => {
//             if (bill.payments.includes(payment)) {
//                 friendsBills.push(bill);
//             }     
//         });
//     });
    
//     return friendsBills;
// }

export const billsWithFriends = (bills, payments, id) => {
    let friendPayments = payments.filter(payment => payment.userId == id)
    let friendsBills = [];
    
    bills.forEach(bill => {
        friendPayments.forEach(payment => {
            if (bill.id === payment.billId) {
                
                friendsBills.push(bill);
            }
        });
    });
    
    return friendsBills;
}