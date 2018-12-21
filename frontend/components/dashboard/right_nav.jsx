import React from 'react';

class RightNav extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <nav className="right-nav">
                <p className='dinnerbill'>SPLIT THE DINNER BILL</p>
                <div className="dinnerimg"></div>
                <p className='plates'>Check out <strong>Plates</strong>, our free iOS app to quickly and easily split dinner bills with friends.</p>
                <a href="https://www.google.com/search?q=plates&safe=active&source=lnms&tbm=isch&sa=X&ved=0ahUKEwic5J-9paPfAhWxHzQIHb-lA-AQ_AUIDygC&cshid=1544927113046000&biw=1440&bih=683" target="_blank" className="platebutton">Download Plates</a>
                <nav className='left-nav-img'></nav>
            </nav>  
        )
    }
}

export default RightNav