import React from 'react';


class BillForm extends React.Component {
    componentDidMount() {
        this.props.clearErrors();
    }

    constructor(props) {
        super(props);
        this.state = {description: "", balance: "", username: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const bill = Object.assign({}, this.state);
        const username = this.state.username;
        const amount = (this.state.balance / 2);
        this.props.createBill(bill)
            .then(bill => this.props.createPayment({ user_id: bill.creatorId, bill_id: bill.id, amount, paid: true }))
            .then(payment => this.props.createPayment({ username, bill_id: payment.billId, amount }))
            .then(this.props.closeModal);
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    renderErrors() {
        return (
            <ul className="errors">
                {this.props.errors.map((error) => (
                    <li className="error">
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="billform">
                    <h2 className="add-a-bill">Add a bill
                    <button onClick={this.props.closeModal} className="X">X</button></h2>
                    <div className='innerbillform'>
                        <div>{this.renderErrors()}</div>
                    <div className='addfriendscont'>
                        <label className='addfriendslabel'>With <strong>you</strong> and:
                            <input className="addfriends" type="text" placeholder="Enter username" onChange={this.update('username')} value={this.state.username}/>
                        </label> 
                    </div>
                    <div className='midinput'>
                        <div className="leftinput">
                        
                        </div>
                        <div className='rightinput'>
                            <input className='desc' type="text" onChange={this.update('description')} placeholder="Enter a description" value={this.state.title} />
                            <div className='amount'><div className='dollar'>$</div>
                                <input className="amtinput" type="number" step="0.01" onChange={this.update('balance')} placeholder="0.00" value={this.state.balance} />
                            </div>
                        </div>
                    </div>
                    <div className='paidby'>
                    Paid by <a className="you">you</a> and split <a className="you">equally</a>.
                    </div>
                    </div>
                   <div className='buttons'>
                        <button onClick={this.props.closeModal} className="cancelbutton">Cancel</button>
                    <input type="submit" value="Save" className="savebutton" />
                    </div>
                    
                </form>
            </div>
        )
    }

}

export default BillForm;


// {/* <button onClick={() => this.props.openModal('paidby')} className="you">you</button> */}