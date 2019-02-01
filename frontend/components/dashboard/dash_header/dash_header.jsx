import React from 'react';
import { Link } from 'react-router-dom';



const DashHeader = ({openModal, friend, payments, currentUser}) => {
    let dashboard;
    let myPayments = 0;
    let myOwed = 0;
    if (friend) {
        dashboard = <div className="dashheaderflex"><div className='profimg'></div>{friend}</div>;
        
    } else {
        dashboard = "Dashboard";
    }
    
    payments.forEach(payment => {
        if (payment.userId == currentUser.id && payment.paid == false) {
            myPayments += Math.round(parseFloat(payment.amount))
        }
    })
    payments.forEach(payment => {
        if (payment.userId == currentUser.id && payment.paid == true) {
            myOwed += Math.round(parseFloat(payment.amount))
        }
    })
    return (
        <nav className="dashheader">
            <nav className="dashtop">
               <h1 className="dashboardtitle">{dashboard}</h1>
               <div className="dashbuttons">
                    <button onClick={() => openModal('billform')} className='dash-button'>Add A Bill</button>
                    <a className='dash-settle-button'>Settle Up</a>
                </div>
            </nav>
            <div className='dashbottom'>
            <div className='flexowed'>
                <p className='titleowe'>you owe</p>
                    <p className="ioweyou" >${myPayments}</p>
            </div>
                <div className='flexowed'>
                    <p className='titleowe'>you are owed</p>
                    <p className="youoweme">${myOwed}</p> 
                </div>
            </div>
        </nav>
    );


};


export default DashHeader;