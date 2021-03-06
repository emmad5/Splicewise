import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import DashboardContainer from './dashboard/dashboard_container';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import FriendsContainer from './friends/friends_container'
import Modal from './modal';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import ActivityContainer from './dashboard/activity_container';

const App = ({ store }) => (
        <Provider store={store}>
            <HashRouter>
                <div>
                <Modal />
                <Switch>
                    <AuthRoute path="/signup" component={SignupFormContainer} />
                    <ProtectedRoute path="/dashboard" component={DashboardContainer} />
                    <ProtectedRoute path="/friends/:friendId" component={FriendsContainer} />
                    <ProtectedRoute path="/activity" component={ActivityContainer} />
                    <AuthRoute path="/" component={GreetingContainer} />
                </Switch>
                </div>
            </HashRouter>
        </Provider>
);

export default App;
