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
        <Link className="heading" to="/">SPLICEWISE</Link>
        </header>
        {signUp()}
        <div className="splashcontenttitle">
        <div className='logoimg'></div>
        <h1 className="split">Splice expenses with friends.</h1>
        </div>
        <div>
        <p className="splashtext"><span className="bold">Share </span> bills and IOUs. <span className="bold">Make sure </span> everyone gets paid back. <span className="bold">Totally free </span> for web, iPhone, and Android.</p>
        </div>
        <div className='splashimg'>
            <div className='splash1img'></div>
            <div className='splash2img'></div>
        </div>
            <Link className="signup-big-button" to="/signup"><div>Get started now</div><div className='signup-smaller'>(It's free!)</div></Link>
        </nav>
    )
};


export default Greeting;