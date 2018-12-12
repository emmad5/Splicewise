import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => ({
    errors: state.errors,
    formtype: 'Log In'
})

const mapDispatchToProps = dispatch => ({
    processform: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);