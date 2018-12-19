import React from 'react';
import UsersListContainer from '../dashboard/users_list_container';
import DashHeaderContainer from '../dashboard/dash_header/dash_header_container';

class FriendShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let friend;
        if (this.props.friend) {
            friend = this.props.friend.username;
        }
        return (
            <div>
                <header className="dashboard-header">
                    <h1 className="dashboard-heading">SPLICEWISE!</h1>
                    <h3></h3>
                    <div className="usernameimg">
                        <div className="headimg"></div>
                        <button onClick={() => this.props.openModal('logout')} className='username'>{this.props.currentUser.username}! &#x25BE;</button>
                    </div>
                </header> 
                <nav className="main">
                    <nav className="left-nav">
                        <UsersListContainer />
                        <nav className='left-nav-img'></nav>
                        <nav className="invitenav">
                            <h1 className='invitefriends'>Invite Friends to Splicewise</h1>
                            <input type="text" className='emailadd' placeholder='Enter an email address' />
                            <input className='submitemail' type="submit" value="Send invite" />
                        </nav>
                    </nav>
                    <nav className="main-nav">
                        <DashHeaderContainer friend={friend} />
                        
                        <div>
                           
                        </div>
                        <nav className="main-nav-img"></nav>
                    </nav>
                    <nav className="right-nav">
                        
                    </nav>
                </nav>
                
             
                </div>
        )
    }



}

export default FriendShow