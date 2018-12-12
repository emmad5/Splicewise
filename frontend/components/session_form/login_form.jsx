import React from 'react'

class LoginForm extends React.Component {

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
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username
                    <input type="text" onChange={this.update('username')} />
                    </label>
                    <label>
                        Password
                    <input type="password" onChange={this.update('password')} />
                    </label>
                    <input type="submit" value={this.props.formtype} />
                </form>
            </div>
        )
    }

}

export default LoginForm;