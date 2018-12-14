import React from 'react';


class BillIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBills();
    }
    constructor(props) {
        super(props);

    }
    renderbills() {
      
        return (<ul className="allbills">
            {this.props.bills.map(bill => {
            return (<li className="eachbill">
            {(bill.createdAt.split('T')[0].split('-').join('/'))}
            <div className='description'>{bill.description}</div>
            <div className='balance'>${bill.balance}</div></li>)}
            )}
        </ul>)
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