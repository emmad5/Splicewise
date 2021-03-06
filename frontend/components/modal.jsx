import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from './session_form/login_form_container';
import BillFormContainer from './bills/bill_form_container';
import LogoutContainer from './dashboard/logout_container';
import EditBillContainer from './bills/edit_bill_container';
import PaidByContainer from './bills/paid_by_container';
import FriendFormContainer from './dashboard/friend_form_container';



function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    let modal_class;
    switch (modal) {
        case 'login':
            modal_class = 'modal-background';
            component = <LoginFormContainer />;
            break;
        case 'billform':
            modal_class = 'billform-background';
            component = <BillFormContainer />;
            break;
        case 'logout':
            modal_class = 'modal-background';
            component = <LogoutContainer />;
            break;
        case 'editbillform':
            modal_class = 'billform-background';
            component = <EditBillContainer />;
            break;
        case 'paidby':
            modal_class = 'modal-background';
            component = <PaidByContainer />;
            break;
        case 'addfriend':
            modal_class = 'billform-background';
            component = <FriendFormContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className={modal_class} onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);