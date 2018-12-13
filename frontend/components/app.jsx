import React from 'react';
import Splash from './splash'; 
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import DashboardContainer from './dashboard/dashboard_container';

const App = () => (
    <div>
       
            <AuthRoute path="/" component={Splash} />
            <ProtectedRoute path="/dashboard" component={DashboardContainer} />
     
    </div>
);

export default App;

// questions - redirecting, pictures in heroku