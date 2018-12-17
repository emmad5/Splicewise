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
        let usernames = this.props.users.map(user => <li className="eachfriend"><div className="userimg"></div>{user.username}</li>)
        return (
            <ul>
                <Link to="/dashboard" className="dashlink"> <div className="logoimg2"></div>Dashboard</Link>
                <h1 className="friends">Friends</h1>
                {usernames}
            </ul>
        )
    }
}
 


    

export default UsersList