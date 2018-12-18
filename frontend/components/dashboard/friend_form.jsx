import React from 'react';


class FriendForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {friend: ""}
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const friend = Object.assign({}, this.state);
        this.props.addFriend(friend).then(this.props.closeModal);
    }

    render() {
       return( 
        <div className="addfriendformdiv">
               <h1 className="addfriendh1">Add friend</h1>
               <form className="friendform" onSubmit={this.handleSubmit}>
            <label className="tolabel">
                To:
                <input type="text" onChange={(e) => this.setState({ friend: e.currentTarget.value})} placeholder=" enter username"/>
            </label>
              
            <input className='addfriendsubmit' value="Send Invite and Add Friend" type="submit"/>
        </form>
        </div>
       )
    }
}

export default FriendForm;