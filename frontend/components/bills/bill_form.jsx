import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    componentDidMount() {
        this.props.clearErrors();
    }
    constructor(props) {
        super(props);
        this.state = {description: "", balance: 0, };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const bill = Object.assign({}, this.state);
        this.props.createBill(bill).then(this.props.closeModal);
    }
    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
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
                <form onSubmit={this.handleSubmit} className="signupform">
                    <input type="text" placeholder="description"/>
                    
                    <input type="text" onChange={this.update('title')} placeholder="Enter a description" value={this.state.title} />
  
                    <input type="number" onChange={this.update('balance')} placeholder="0.00" value={this.state.balance} />
                    <input type="date"/>
                    <input type="submit" value="Save" className="signupbutton" />
                </form>
            </div>
        )
    }

}

export default SignupForm;