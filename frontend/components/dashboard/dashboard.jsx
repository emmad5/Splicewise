import React from 'react';
import { Link } from 'react-router-dom';



const Dashboard = ({ currentUser, logout }) => {
    return (
        <nav>
            <header className="dashboard-header">
            <h1 className="dashboard-heading">SPLICEWISE!</h1>
                <button className="username">{currentUser.username}! &#x25BE;</button>
            <button onClick={logout} className="logout">Log Out</button>
            </header>
        </nav>
    );

    
};


export default Dashboard;