import React from 'react';
import { Link } from 'react-router-dom';



const DashHeader = ({openModal}) => {
    return (
        <nav className="dashheader">
            <nav className="dashtop">
               <h1 className="dashboardtitle">Dashboard</h1>
               <div className="dashbuttons">
                    <button onClick={() => openModal('billform')} className='dash-button'>Add A Bill</button>
                    <a href="https://www.wikihow.com/Settle-an-Argument-with-Your-Wife" className='dash-settle-button'>Settle Up</a>
                </div>
            </nav>
        </nav>
    );


};


export default DashHeader;