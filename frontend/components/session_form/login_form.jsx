import React from 'react'

class LoginForm extends React.Component {
    componentDidMount() {
        this.props.clearErrors();
    }

    constructor(props) {
        super(props);
        this.state = { username: "", password: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processform(user);
    }
    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }
    renderErrors() {
            return (
                <ul className="errors">
                    {this.props.errors.map((error, i) => (
                        <li className="error" key={i}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        
    }

    render() {
        return (
            <div>
               
                <h1 className="heading">SPLICEWISE!</h1>
               
                <form onSubmit={this.handleSubmit} className="loginform">
                    <div>{this.renderErrors()}</div>
                    <input type="text" onChange={this.update('username')} placeholder="Username"/>
                 
                
                    <input type="password" onChange={this.update('password')} placeholder="Password" />
                 
                    <input type="submit" className="loginsubmit" value="Log In to Splicewise"/>
                    <button className="loginsubmit" >Demo Login</button>
                </form>
              
            </div>
        )
    }

}

export default LoginForm;