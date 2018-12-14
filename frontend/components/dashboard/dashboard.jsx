import React from 'react';
import { Link } from 'react-router-dom';
import DashHeaderContainer from './dash_header/dash_header_container';
import BillIndexContainer from '../bills/bill_index_container'


const Dashboard = ({ currentUser, logout, openModal }) => {
    return (
        <nav>
            <header className="dashboard-header">
            <h1 className="dashboard-heading">SPLICEWISE!</h1>
            <h3></h3>
                <div className="usernameimg">
                    <div className="headimg"></div>
                    <button onClick={() => openModal('logout')} className='username'>{currentUser.username}! &#x25BE;</button>
                </div>
            </header>
            <nav className="main">
            <nav className="left-nav">left</nav>
            <nav className="main-nav">
            <DashHeaderContainer/>
            <BillIndexContainer/>
            <nav className="main-nav-img"></nav>
            </nav>
            <nav className="right-nav">right</nav>
            </nav>
        </nav>
    );

    
};


export default Dashboard;