import React from 'react';

class BillShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.bill;

    }

    render() {
        
        let pays = this.props.payments.map(payment => payment.amount);
        let users = this.props.payments.map(payment => payment.user);
        return (<div className="billflex">
            <h2 className='balance'>{users[0]} paid <br /><div className='positive'>${this.props.bill.balance}</div></h2>
            <h2 className='balance'>{users[1]} owes {users[0]}: <br /> <div className='negative'>${pays[1]}</div></h2>
            </div>)
        
    }
}

export default BillShow