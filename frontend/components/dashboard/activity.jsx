import React from 'react';
import UsersListContainer from './users_list_container';
import DashHeaderContainer from './dash_header/dash_header_container';

class Activity extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <nav>
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
                        <nav className="dashheader">
                            <nav className="dashtop">
                                <h1 className="dashboardtitle">Recent Activity</h1>
                            
                          
                            </nav>
                       
                        </nav>
                      
                        <nav className="main-nav-img"></nav>
                    </nav>
                    
                    <nav className="right-nav">
                        <p className='dinnerbill'>SPLIT THE DINNER BILL</p>
                        <div className="dinnerimg"></div>
                        <p className='plates'>Check out <strong>Plates</strong>, our free iOS app to quickly and easily split dinner bills with friends.</p>
                        <a href="https://www.google.com/search?q=plates&safe=active&source=lnms&tbm=isch&sa=X&ved=0ahUKEwic5J-9paPfAhWxHzQIHb-lA-AQ_AUIDygC&cshid=1544927113046000&biw=1440&bih=683" target="_blank" className="platebutton">Download Plates</a>
                    </nav>
                   
                </nav>


            </nav>
        )
    }

}

export default Activity