import React from 'react';
import {Link} from 'react-router-dom';

class SignupForm extends React.Component {
    componentDidMount() {
        this.props.clearErrors();
    }
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processform(user);
    }
    update(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
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
        return(
            <div>            
                <form onSubmit={this.handleSubmit} className="signupform">
                    <h3 className="intro">INTRODUCE YOURSELF</h3>
                    <div>{this.renderErrors()}</div>
                    <h2>Hi There! My username is</h2>
                    <input type="text" onChange={this.update('username')} className="userinput"/>
                    <h2>And here's my password</h2>
                    <input type="password" onChange={this.update('password')} className="userinput"/>
                    <br/>
                    <input type="submit" value="Sign Me Up!" className="signupbutton"/>
                </form>
            </div>
        )
    }

}

export default SignupForm;