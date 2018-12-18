import React from 'react';
import {Link} from 'react-router-dom'


class UsersList extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.fetchUsers();
    }


    render () {
        let usernames = this.props.users.map(user => <li key={user.id} className="eachfriend"><div className="userimg"></div>{user.username}</li>)
        let friends = this.props.friends.map(friend => <li key={friend.id} className="eachfriend"><div className="userimg"></div>{friend.username}</li>)
        let pendingFriends = this.props.pendingFriends.map(friend => <li key={friend.id} className="eachfriend"><div className="userimg"></div>{friend.username}</li>)
        return (
            <ul>
                <Link to="/dashboard" className="dashlink"> <div className="logoimg2"></div>Dashboard</Link>
                <h1 className="friends">Friends
                <button onClick={() => this.props.openModal('addfriend')}className="add-friend-button" >+ add</button>
                </h1>
                {friends}
                <h1 className="friends">Pending Friends</h1>
                {pendingFriends}
                <h1 className="friends">All Users</h1>
                {usernames}
            </ul>
        )
    }
}
 


    

export default UsersList