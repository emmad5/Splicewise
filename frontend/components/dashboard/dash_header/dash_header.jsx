import React from 'react';
import { Link } from 'react-router-dom';



const DashHeader = ({openModal, friend}) => {
    let dashboard;
    if (friend) {
        dashboard = <div className="dashheaderflex"><div className='profimg'></div>{friend}</div>;
    } else {
         dashboard = "Dashboard";
    }
    return (
        <nav className="dashheader">
            <nav className="dashtop">
               <h1 className="dashboardtitle">{dashboard}</h1>
               <div className="dashbuttons">
                    <button onClick={() => openModal('billform')} className='dash-button'>Add A Bill</button>
                    <a href="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/03/05/12/kittens.jpg?w968h681" target="_blank" className='dash-settle-button'>Settle Up</a>
                </div>
            </nav>
        </nav>
    );


};


export default DashHeader;