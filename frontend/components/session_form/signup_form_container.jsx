import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => ({
    errors: state.errors,
    formtype: 'Sign Up'
})

const mapDispatchToProps = dispatch => ({
    processform: (user) => dispatch(signup(user)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);