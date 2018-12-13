import React from 'react';



class LoginForm extends React.Component {
    
    componentDidMount() {
        this.props.clearErrors();
    }

    constructor(props) {
        super(props);
        this.state = { username: "", password: "", modalIsOpen: false };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.update = this.update.bind(this);
       
    }
   
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processform(user).then(this.props.closeModal);
    }
    handleSubmit2(e) {
        e.preventDefault();
        const user2 = Object.assign({username: 'guest', password: 'password'});
        this.props.processform(user2).then(this.props.closeModal);
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
                <form onSubmit={this.handleSubmit} className="loginform" >
                <div>{this.renderErrors()}</div>
                <input type="text" onChange={this.update('username')} className="logininput" placeholder="Username"/>
                    <input type="password" onChange={this.update('password')} className="logininput" placeholder="Password" />
                <input type="submit" className="loginsubmit" value="Log In to Splicewise"/>
                    <button className="demo" onClick={this.handleSubmit2}>Demo Login</button>
                </form>

            </div>
        )
    }

}

export default LoginForm;