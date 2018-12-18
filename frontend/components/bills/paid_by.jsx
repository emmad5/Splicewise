import React from 'react';

class PaidBy extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className='paidbyform'>
        
            <h2 className='choosepayer'>Choose Payer</h2>
            <div className="user">
            <div className='profileimg'></div>
            {this.props.currentUser.username}
            
            </div>
                <button onClick={this.props.set(this.props.user)}>
            <div className="user">
            <div className='profileimg'></div>
            {this.props.user}
            </div>
                </button>
        
        </div>
        )
    }
}

export default PaidBy