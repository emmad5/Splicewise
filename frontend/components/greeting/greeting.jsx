import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
    const signUp = () => (
        <nav>
            <Link to="/" className="login-button">Log In</Link>
            <p className="or">or</p>
            <Link className="signup-button" to="/signup">Sign up</Link>
        </nav>
    );
    const greeting = () => (
        <nav>
            <h2>{currentUser.username}!</h2>
            <button onClick={logout}>Log Out</button>
        </nav>
    );

    if (currentUser) {
        return greeting() 
    } else {
        return signUp()
    }
};


export default Greeting;