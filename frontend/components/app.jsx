import React from 'react';
import Splash from './splash'; 
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import DashboardContainer from './dashboard/dashboard_container';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import Modal from './modal';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const App = ({ store }) => (
    <div>
        
    
        <Provider store={store}>
            <HashRouter>
                <div>
                <Modal />
                <Switch>
                    <AuthRoute path="/signup" component={SignupFormContainer} />
                    <ProtectedRoute path="/dashboard" component={DashboardContainer} />
                    <AuthRoute path="/" component={GreetingContainer} />
                </Switch>
                </div>
            </HashRouter>
        </Provider>
     
    </div>
);

export default App;
