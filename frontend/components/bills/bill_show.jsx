import React from 'react';

class BillShow extends React.Component {
    constructor(props) {
        super(props)
  

    }
    componentDidMount() {

    }
    render() {
        
        let pays = this.props.bill.payments.map(payment => payment.amount);
        let users = this.props.bill.payments.map(payment => payment.user);
        
        return (<div className="billflex">
                <h2 className='balance'>Total amount: ${this.props.bill.balance}</h2>
                {/* <h2 className='balance'>You paid: ${pays[0]}</h2> */}
            <h2 className='balance'>{users[1].username} owes {users[0].username}: ${pays[1]}</h2>
            </div>)
    }
}
    
    


export default BillShow