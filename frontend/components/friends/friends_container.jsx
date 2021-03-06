import FriendShow from './friends';
import { connect } from 'react-redux';
import {logout} from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';
import {billsWithFriends} from '../../reducers/selectors';
import {fetchBills} from '../../actions/bill_actions';
import {fetchPayments} from '../../actions/payment_actions';
import {clearBillErrors, deleteBill} from '../../actions/bill_actions';
import { removeFriend, addFriend} from '../../actions/friend_actions';



const mapStateToProps = (state, ownProps) => {
   return  {
       currentUser: state.entities.users[state.session.id],
        friend: state.entities.users[ownProps.match.params.friendId],
        bills: Object.values(state.entities.bills),
        payments: Object.values(state.entities.payments),
       friends: state.entities.users[state.session.id].friends,
        // friendsBills: billsWithFriends(state, ownProps)
    }
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout),
    openModal: modal => dispatch(openModal(modal)),
    fetchBills: () => dispatch(fetchBills()),
    fetchPayments: () => dispatch(fetchPayments()),
    clearBillErrors: () => dispatch(clearBillErrors()),
    deleteBill: (id) => dispatch(deleteBill(id)),
    removeFriend: (id) => dispatch(removeFriend(id)),
    addFriend: (friend) => dispatch(addFriend(friend)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendShow);