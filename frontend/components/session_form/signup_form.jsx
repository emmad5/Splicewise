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
        this.handleSubmit2 = this.handleSubmit2.bind(this);

        this.update = this.update.bind(this);
        this.username = 'guest'.split('');
        this.password = 'password'.split('')
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processform(user);
    }
    handleSubmit2(e) {
        e.preventDefault();
        // const user2 = Object.assign({ username: 'guest', password: 'password' });
        // this.props.login(user2);
        this.startDemo.bind(this)();
    }
    startDemo() {
        let { username } = this.state;
        let { password } = this.state;
        if (this.username.length > 0) {
            this.setState(
                { username: username + this.username.shift() }, () => {
                    setTimeout(() =>
                        this.startDemo(), 150);
                }
            )
        } else if (this.password.length > 0) {
            this.setState(
                { password: password + this.password.shift() }, () => {
                    setTimeout(() =>
                        this.startDemo(), 150)
                }
            )
        } else {
            this.props.login(this.state);
        }

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
            <div className='flexSignUp'>   
                    
                  <div className='signupimg'></div>
                  <div>
                <form onSubmit={this.handleSubmit} className="signupform">
                    <h3 className="intro">INTRODUCE YOURSELF</h3>
                    <div>{this.renderErrors()}</div>
                    <h2 className="usernametext">Hi There! My username is</h2>
                    <input type="text" onChange={this.update('username')} value={this.state.username} className="usernameinput"/>
                    <h2 className="passwordtext">And here's my <span className="bold"> password:</span></h2>
                        <input type="password" onChange={this.update('password')} value={this.state.password} className="passwordinput"/>
                    <br/>
                    <input type="submit" value="Sign Me Up!" className="signupbutton"/>
                    <br/>
                    <button onClick={this.handleSubmit2} className="loginbutton">Demo</button>
                    <br/>
                    <br/>
                    <a href="https://i.ytimg.com/vi/hbYK-JzFtPg/maxresdefault.jpg" target="_blank" className='terms'>By signing up, you accept the Splicewise Terms of Service.</a>
                </form>
                </div>
            </div>
        )
    }

}

export default SignupForm;