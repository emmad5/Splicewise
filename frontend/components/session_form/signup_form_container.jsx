import { connect } from 'react-redux';
import React from 'react';
import { signup, clearErrors, login } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formtype: 'Sign Up'
})

const mapDispatchToProps = dispatch => ({
    processform: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    login: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);