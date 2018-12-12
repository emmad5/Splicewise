import React from 'react'
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const Splash = () => (
    <header className="header">
        <h1 className="heading">SPLICEWISE!</h1>
        <GreetingContainer />
        <Route path="/" exact component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </header>
)

export default Splash