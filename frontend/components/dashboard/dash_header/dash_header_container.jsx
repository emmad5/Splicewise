import DashHeader from './dash_header';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(DashHeader);