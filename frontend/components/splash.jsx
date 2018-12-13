import React from 'react'
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';
import Modal from './modal';
import { Switch, Route } from 'react-router';

const Splash = () => (
    <div>
    <Modal />
            <Switch>        
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <AuthRoute  path="/" component={GreetingContainer} />
            </Switch>
    </div>
)

export default Splash