import React from 'react';
import { connect } from 'react-redux';
import PaidBy from './paid_by';


const mapStateToProps = (state, ownProps) => {
    
    return {currentUser: state.entities.users[state.session.id]};
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PaidBy);