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
        this.username = 'guest'.split('');
        this.password = 'password'.split('')
       
    }
   
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processform(user).then(this.props.closeModal);
    }
    handleSubmit2(e) {
        e.preventDefault();
        // const user2 = Object.assign({username: 'guest', password: 'password'});
        // this.props.processform(user2).then(this.props.closeModal);
        this.startDemo.bind(this)();
    }

    startDemo() {
        let { username } = this.state;
        let { password } = this.state;
        if (this.username.length > 0) {
            this.setState(
                {username: username + this.username.shift()}, () => {
                    setTimeout(() => 
                    this.startDemo(), 200);
                }
            )
        } else if (this.password.length > 0){
            this.setState(
                {password: password + this.password.shift()}, () => {
                    setTimeout(() => 
                    this.startDemo(), 200)
                }
            )
        } else {
            this.props.processform(this.state).then(this.props.closeModal);
        }

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
                <input type="text" onChange={this.update('username')} className="logininput" value={this.state.username} placeholder="Username"/>
                    <input type="password" onChange={this.update('password')} value={this.state.password} className="logininput" placeholder="Password" />
                <input type="submit" className="loginsubmit" value="Log In to Splicewise"/>
                    <button className="demo" onClick={this.handleSubmit2}>Demo Login</button>
                </form>
            </div>
        )
    }

}

export default LoginForm;