import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ logout, openModal }) => {
    const signUp = () => (
        <nav>
            <button className="login-button" onClick={() => openModal('login')}>Log In</button>
            <p className="or">or</p>
            <Link className="signup-button" to="/signup">Sign up</Link>
        </nav>
    );
   
    return (
        <nav>
        <header className="header">
        <h1 className="heading">SPLICEWISE!</h1>
        </header>
        {signUp()}
        <div className="splashcontenttitle">
        <div className='logoimg'></div>
        <h1 className="split">Split expenses with friends.</h1>
        </div>
        <div>
        <p className="splashtext"><span className="bold">Share </span> bills and IOUs. <span className="bold">Make sure </span> everyone gets paid back. <span className="bold">Totally free </span> for web, iPhone, and Android.</p>
        </div>
            <Link className="signup-big-button" to="/signup"><div>Get started now</div><div className='signup-smaller'>(It's free!)</div></Link>
        </nav>
    )
};


export default Greeting;