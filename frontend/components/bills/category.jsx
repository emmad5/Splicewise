import React from 'react';

class Category extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='paidbyform'>

                <h2 className='choosepayer'>Choose Category</h2>
                <ul>
                    <li ><button className='categoryli' onClick={this.props.setCategory("Uncategorized")}>Uncategorized</button></li>
                    <li ><button className='categoryli' onClick={this.props.setCategory("Food and Drink")}>Food and Drink</button></li>
                    <li ><button className='categoryli' onClick={this.props.setCategory("Home")}>Home</button></li>
                    <li ><button className='categoryli' onClick={this.props.setCategory("Transportation")}>Transportation</button></li>
                    <li ><button className='categoryli' onClick={this.props.setCategory("Life")}>Life</button></li>
                    <li ><button className='lastli' onClick={this.props.setCategory("Utilities")}>Utilities</button></li>
                </ul>
            </div>
        )
    }
}

export default Category