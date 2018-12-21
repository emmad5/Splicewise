import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer'


class Greeting extends React.Component {
    componentDidMount() {
        this.props.closeModal();
    }
    constructor(props) {
        super(props);
    }

    signUp() {
        return (
        <nav>
            <button className="login-button" onClick={() => this.props.openModal('login')}>Log In</button>
            <p className="or">or</p>
            <Link className="signup-button" to="/signup">Sign up</Link>
        </nav>
        )
    }
    render() {

        return (
            <nav>
                <div className='splash-main-content'>
            <header className="header">
            <Link className="heading" to="/">SPLICEWISE</Link>
            </header>
            {this.signUp()}
            <div className="splashcontenttitle">
            <div className='logoimg'></div>
            <h1 className="split">Split expenses with friends.</h1>
            </div>
            <div>
            <p className="splashtext"><span className="bold">Share </span> bills and IOUs. <span className="bold">Make sure </span> everyone gets paid back. <span className="bold">Totally free </span> for web, iPhone, and Android.</p>
            </div>
            <div className='splashimg'>
                <div className='splash1img'></div>
                <div className='splash2img'></div>
            </div>
                <Link className="signup-big-button" to="/signup"><div>Get started now</div><div className='signup-smaller'>(It's free!)</div></Link>
                </div>
                <Footer/>
            </nav>
        )
    }
   
};


export default Greeting;