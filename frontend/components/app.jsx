import React from 'react';
import Splash from './splash'; 
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import DashboardContainer from './dashboard/dashboard_container';

const App = () => (
    <div>
        <Switch>  
            <AuthRoute path="/" component={Splash} />
            <ProtectedRoute path="/dashboard" component={DashboardContainer} />
        </Switch>
    </div>
);

export default App;