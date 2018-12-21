import React from 'react';
import UsersListContainer from './users_list_container';
import DashHeaderContainer from './dash_header/dash_header_container';
import RightNav from './right_nav';
import LeftNav from './left_nav';

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
                        <button onClick={() => this.props.openModal('logout')} className='username'>{this.props.currentUser.username}! <i class="fas fa-caret-down"></i></button>
                    </div>
                </header>
                <nav className="main">
                    <LeftNav/>
                    <nav className="main-nav">
                        <nav className="dashheader">
                            <nav className="dashtop">
                                <h1 className="dashboardtitle">Recent Activity</h1>         
                            </nav>
                        </nav>
                        <h3 className='comingsoon'>Coming soon!</h3>
                        <nav className="main-nav-img"></nav>
                    </nav>             
                    <RightNav/>           
                </nav>
            </nav>
        )
    }
}

export default Activity