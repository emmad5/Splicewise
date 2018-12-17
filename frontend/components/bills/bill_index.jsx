import React from 'react';
import BillIndexItem from './bill_index_item';


class BillIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBills();
        this.props.fetchPayments();
    }
 
    constructor(props) {
        super(props);

    }
    renderbills() {
      
        return (
            <ul className='allbills'>
                {this.props.bills.map(bill => <BillIndexItem key={bill.id} bill={bill} deleteBill={this.props.deleteBill} openModal={this.props.openModal}/>)}
            </ul>
        )
    }

    render() {
        return(
            <div>
                {this.renderbills()}
            </div>
        );
    }
}

export default BillIndex;