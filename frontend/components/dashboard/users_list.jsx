import React from 'react';
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'


class UsersList extends React.Component {
    constructor(props) {
        super(props);
        
    }


    componentDidMount() {
        this.props.fetchUsers();
    }


    render () {
        
        let usernames = this.props.users.map(user => <Link to={`/friends/${user.id}`} key={user.id} className="eachfriend"><div className="userimg"></div>{user.username}</Link>)
        let friends = this.props.friends.map(friend => <Link to={`/friends/${friend.id}`} key={friend.id} className="eachfriend"><div className="userimg"></div>{friend.username} </Link>)
        
        let friendRequests = this.props.friendRequests.map(friend => {
         return (<li key={friend.id} className="eachfriend">
             <div className='eachflex'>
            <div className="userimg"></div>
            
            {friend.username}
             </div>
            <button onClick={() => this.props.acceptFriend(friend)} className='accept'>accept </button>
            
        </li>)
        })
        return (
            <ul>
                <NavLink to="/dashboard" activeClassName='is-active'  className="dashlink"> <div className="logoimg2"></div>Dashboard</NavLink>
                <NavLink to="/activity" className="dashlink" activeClassName='is-active'> <i className="fas fa-flag"></i>Recent Activity</NavLink>
                <h1 className="friends">Friends
                <button onClick={() => this.props.openModal('addfriend')}className="add-friend-button" >+ add</button>
                </h1>
                {friends}
                <h1 className="friends">Friend Requests</h1>
                {friendRequests}
                <h1 className="friends">All Users</h1>
                {usernames}
            </ul>
        )
    }
}
 


    

export default UsersList