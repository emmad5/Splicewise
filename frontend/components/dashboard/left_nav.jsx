import React from 'react';
import UsersListContainer from './users_list_container';

class LeftNav extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <nav className="left-nav">

                <UsersListContainer />

                <nav className="invitenav">
                    <h1 className='invitefriends'>Invite Friends to Splicewise</h1>
                    <input type="text" className='emailadd' placeholder='Enter an email address' />
                    <input className='submitemail' type="submit" value="Send invite" />
                </nav>
                <br />
                <div className='buttonflex'>
                    <a href="https://www.linkedin.com/in/emma-deas-49020a133/" target="_blank" className='linkedin'>Linked <i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/emmad5" target="_blank" className='linkedin github'>Github <i className="fab fa-github"></i></a>
                </div>
            </nav>
            
        )
    }
}

export default LeftNav;