import React from 'react'
import BillShowContainer from './bill_show_container';

class BillIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    removeBill(billId) {
        return () => {
            this.props.deleteBill(billId);
        }
    }
    _onButtonClick() {
        if (this.state.showComponent) {
            this.setState({
                showComponent: false,
            });
        } else {
            this.setState({
                showComponent: true,
            });
        }
    }

    render() {
        const date = new Date(this.props.bill.createdAt).toDateString();
        return (
                <li className="eachbill">
                <div className='date'>{date}</div>

                <div className='billshow'>
                    <button className='description' onClick={this._onButtonClick}>{this.props.bill.description}</button>
                    {this.state.showComponent ?
                        <BillShowContainer bill={this.props.bill} /> :
                        null
                    }
                </div>
                    {/* <button className="delete" onClick={() => this.props.openModal('editbillform')}>Edit Bill</button> */}
                    <button className="delete" onClick={this.removeBill(this.props.bill.id)}>&#10005;</button>
                </li> 
        )
    }
}
 

export default BillIndexItem
