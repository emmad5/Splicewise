import React from 'react';

class PaidBy extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className='paidbyform'>
        
            <h2 className='choosepayer'>Choose Payer</h2>
            <button onClick={this.props.set(this.props.borrower, this.props.payer)}>
                <div className="user">
                <div className='profileimg'></div>
                {this.props.borrower}
                </div>
            </button>
            <button onClick={this.props.set(this.props.payer, this.props.borrower)}>
                <div className="user">
                <div className='profileimg'></div>
                {this.props.payer}
                </div>
             </button>
        
        </div>
        )
    }
}

export default PaidBy