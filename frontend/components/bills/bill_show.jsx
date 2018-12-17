import React from 'react';

class BillShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.bill;

    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.bill.payments.length != this.props.payments.length) {
            
    //         this.props.fetchPayments()
    //     }
    // }

    render() {
        
        let pays = this.props.payments.map(payment => payment.amount);
        let users = this.props.payments.map(payment => payment.user);
        return (<div className="billflex">
                <h2 className='balance'>Total amount: ${this.props.bill.balance}</h2>
            <h2 className='balance'>{users[1]} owes {users[0]}: ${pays[1]}</h2>
            </div>)
        
    }
}

export default BillShow