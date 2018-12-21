import React from 'react';
import UsersListContainer from '../dashboard/users_list_container';
import DashHeaderContainer from '../dashboard/dash_header/dash_header_container';
import { billsWithFriends } from '../../reducers/selectors';
import BillIndexItem from '../bills/bill_index_item';
import {Link} from 'react-router-dom';
import LeftNav from '../dashboard/left_nav';

class FriendShow extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchBills();
        this.props.fetchPayments();
    }
 
    render() {
        let friend;
        let billFriends;
        let mappedBillFriends;
        let mappedUL;
        if (this.props.friend) {
            friend = this.props.friend.username;
            if (this.props.payments) {
                billFriends = billsWithFriends(this.props.bills, this.props.payments, this.props.friend.id);
            }
        }
        if (billFriends) {
            mappedBillFriends = billFriends.map(bill => <BillIndexItem key={bill.id} bill={bill} deleteBill={this.props.deleteBill} openModal={this.props.openModal} fetchPayments={this.props.fetchPayments} />)           
            mappedUL = (<ul className='allbills'>{mappedBillFriends}</ul>)
        }
       
       
        return (
            <div>
                <header className="dashboard-header">
                    <h1 className="dashboard-heading">SPLICEWISE!</h1>
                    <h3></h3>
                    <div className="usernameimg">
                        <div className="headimg"></div>
                        <button onClick={() => this.props.openModal('logout')} className='username'>{this.props.currentUser.username}! <i class="fas fa-caret-down"></i></button>
                    </div>
                </header> 
                <nav className="main">
                    <LeftNav/>
                    <nav className="main-nav">
                        <DashHeaderContainer friend={friend} />                     
                        <ul>{mappedUL}</ul>
                        <nav className="main-nav-img"></nav>
                    </nav>
                    <nav className="right-nav">
                    <Link to="/dashboard">
                        <button className='delete-friend-button' onClick={() => this.props.removeFriend(this.props.friend.id)}>Remove This Friend</button>
                    </Link>
                        <nav className='left-nav-img'></nav>
                    </nav>
                </nav>
                
             
                </div>
        )
    }



}

export default FriendShow