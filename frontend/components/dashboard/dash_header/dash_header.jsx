import React from 'react';
import { Link } from 'react-router-dom';



const DashHeader = ({openModal}) => {
    return (
        <nav className="dashheader">
            <nav className="dashtop">
               <h1 className="dashboardtitle">Dashboard</h1>
                <button onClick={() => openModal('billform')} className='dash-button'>Add A Bill</button>
                <button className='dash-settle-button'>Settle Up</button>
            </nav>
        </nav>
    );


};


export default DashHeader;