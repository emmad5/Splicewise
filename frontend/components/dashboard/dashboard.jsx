import React from 'react';
import { Link } from 'react-router-dom';
import DashHeaderContainer from './dash_header/dash_header_container';
import BillIndexContainer from '../bills/bill_index_container';
import UsersListContainer from './users_list_container';
import RightNav from './right_nav';
import LeftNav from './left_nav';


const Dashboard = ({ currentUser, logout, openModal }) => {
    return (
        <nav>
            <header className="dashboard-header">
            <h1 className="dashboard-heading">SPLICEWISE!</h1>
            <h3></h3>
                <div className="usernameimg">
                    <div className="headimg"></div>
                    <button onClick={() => openModal('logout')} className='username'>{currentUser.username}! <i className="fas fa-caret-down"></i></button>
                </div>
            </header>
            <nav className="main">
               <LeftNav/>
            <nav className="main-nav">
            <DashHeaderContainer/>
            <BillIndexContainer/>
            <nav className="main-nav-img"></nav>
            </nav>
            <RightNav/>
            </nav>
        </nav>
    );

    
};


export default Dashboard;