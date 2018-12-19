import React from 'react';


class FriendForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {friend: ""}
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        this.props.clearErrors();
    }


    handleSubmit(e) {
        e.preventDefault();
        
        const friend = Object.assign({}, this.state);
        this.props.addFriend(friend).then(this.props.closeModal);
    }
    renderErrors() {
        return (
            <ul className="errors">
                {this.props.errors.map((error, i) => (
                    <li className="error" key={i}>
                        {error}
                    </li>
                ))}
            </ul>);
    }

    render() {
       return( 
        <div className="addfriendformdiv">
    
               <div className="addfriendh1">  <div className='divflexfriends'>
                   <div className='logoaddfriend'></div>
                   <h1 className='addafriendh1'>Add friend</h1>
                   </div>
                   
                   <button onClick={this.props.closeModal} className="X" className="xcolor">x</button>
                   </div>
               <form className="friendform" onSubmit={this.handleSubmit}>
            <label className="tolabel">
                To:
                <input type="text" onChange={(e) => this.setState({ friend: e.currentTarget.value})} placeholder=" enter username"/>
            </label>
            <div className='frienderrors'>{this.renderErrors()}
                <input className='addfriendsubmit' value="Add Friend" type="submit"/>
            </div>
        </form>
        </div>
       )
    }
}

export default FriendForm;