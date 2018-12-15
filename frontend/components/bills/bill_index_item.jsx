import React from 'react'

class BillIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    removeBill(billId) {
        return (e) => {
            this.props.deleteBill(billId);
        }
    }

    render() {
        return (
                <li className="eachbill">
                <div className='date'>{(this.props.bill.createdAt.split('T')[0].split('-').join('/'))}</div>
                    <div className='description'>{this.props.bill.description}</div>
                    <div className='balance'>${this.props.bill.balance}</div>
                    <button className="delete" onClick={() => this.props.openModal('editbillform')}>Edit Bill</button>
                    <button className="delete" onClick={this.removeBill(this.props.bill.id)}>&#10005;</button>
                </li> 
        )
    }
}
 

export default BillIndexItem
