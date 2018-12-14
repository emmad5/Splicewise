import React from 'react';


class BillIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBills();
    }
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
            {this.props.bills}
            </div>
        );
    }
}

export default BillIndex;