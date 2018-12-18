import React from 'react';

class PaidBy extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className='paidbyform'>
        
            <h2 className='choosepayer'>Choose Payer</h2>
            <p className="user">
            <div className='profileimg'></div>
            {this.props.currentUser.username}
            
            </p>
            <p className="user">
            <div className='profileimg'></div>
            {this.props.user}
            </p>
        
        
        </div>
        )
    }
}

export default PaidBy