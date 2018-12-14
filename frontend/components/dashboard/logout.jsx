import React from 'react';



const Logout = ({ logout }) => {
    return (
        <div>
        <button onClick={logout} className="logout">Log Out</button>
        <div className="logouthelp"></div>
        </div>
    )
}

export default Logout