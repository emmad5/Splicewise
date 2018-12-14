import React from 'react';
import { Link } from 'react-router-dom';
import DashHeaderContainer from './dash_header/dash_header_container';



const Dashboard = ({ currentUser, logout }) => {
    return (
        <nav>
            <header className="dashboard-header">
            <h1 className="dashboard-heading">SPLICEWISE!</h1>
            <h3></h3>
                <div className="usernameimg">
                    <div className="headimg"></div>
                <button className="username">{currentUser.username}! &#x25BE;</button>
                </div>
            <button onClick={logout} className="logout">Log Out</button>
            </header>
            <nav className="main">
            <nav className="left-nav">tests</nav>
            <nav className="main-nav">
            <DashHeaderContainer/>
            <nav className="main-nav-img"></nav>
            </nav>
            <nav className="right-nav">test</nav>
            </nav>
        </nav>
    );

    
};


export default Dashboard;