import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Route } from 'react-router-dom';
const App = () => (
    <div>
        <header>
            <h1>SPLICEWISE!</h1>
            <GreetingContainer />
        </header>
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;