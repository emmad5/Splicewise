import React from 'react';
import { Link } from 'react-router-dom';

class EditBillForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { description: "", balance: "", };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const bill = Object.assign({}, this.state);
        this.props.updateBill(bill).then(this.props.closeModal);
    }
    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }
    renderErrors() {
        return (
            <ul className="billerrors">
                {this.props.errors.map((error) => (
                    <li className="billerror">
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
                    <h2 className="add-a-bill">Edit bill
                    <button onClick={this.props.closeModal} className="X">X</button></h2>
                    <div className='innerbillform'>
                        <div className='addfriendscont'>
                            <label className='addfriendslabel'>With <strong>you</strong> and:
                    <input className="addfriends" type="text" placeholder="Enter username" />
                            </label>
                        </div>
                        <input className='desc' type="text" onChange={this.update('description')} placeholder="Enter a description" value={this.state.title} />
                        <div className='amount'><div className='dollar'>$</div>
                            <input className="amtinput" type="number" step="0.01" onChange={this.update('balance')} placeholder="0.00" value={this.state.balance} />
                        </div>
                        <div className='paidby'>
                            Paid by <a className="you">you</a> and split <a className="you">equally</a>.
                    </div>
                    </div>
                    <div className='buttons'>
                        <button onClick={this.props.closeModal} className="cancelbutton">Cancel</button>
                        <input type="submit" value="Edit" className="savebutton" />
                    </div>

                </form>
            </div>
        )
    }

}

export default EditBillForm;