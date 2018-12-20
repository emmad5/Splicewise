import React from 'react';
import PaidByContainer from './paid_by_container';
import CategoryContainer from './category_container';


class BillForm extends React.Component {
    componentDidMount() {
        this.props.clearErrors();
    }

    constructor(props) {
        super(props);
        this.state = {description: "", balance: "", borrower: "", showComponent: false, payer: this.props.currentUser.username, showCategory: false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this._onButtonClick = this._onButtonClick.bind(this);
        this._onCategoryClick = this._onCategoryClick.bind(this);
        this.set = this.set.bind(this);
        this.setCategory = this.setCategory.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const billparams = Object.assign({}, this.state);
        
        this.props.createBill(billparams)
            .then(this.props.closeModal);
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    renderErrors() {
        return (
            <ul className="errors">
                {this.props.errors.map((error) => (
                    <li className="error">
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
    _onButtonClick(e) {
        e.preventDefault();
        if (this.state.showComponent) {
            this.setState({
                showComponent: false,
            });
        } else {
            this.setState({
                showComponent: true,
            });
        }
    }
    set(payer, borrower) {
        let that = this;
        return (e) => {
            e.preventDefault();
            that.setState({payer: payer})
            that.setState({borrower: borrower})
            that.setState({showComponent: false})
        }
      
    }
    setCategory(category) {
        let that = this
        return (e) => {
            e.preventDefault();
            that.setState({category})
            that.setState({ showCategory: false })
        }
    }

    _onCategoryClick(e) {
        e.preventDefault();
        if (this.state.showCategory) {
            this.setState({
                showCategory: false,
            });
        } else {
            this.setState({
                showComponent: false,
                showCategory: true,
            });
        }
    }
    render() {
    
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="billform">
                    <h2 className="add-a-bill">Add a bill
                    <button onClick={this.props.closeModal} className="X">X</button></h2>
                    <div className='innerbillform'>
                        <div>{this.renderErrors()}</div>
                    <div className='addfriendscont'>
                        <label className='addfriendslabel'>With <strong>you</strong> and:
                            <input className="addfriends" type="text" placeholder="Enter username" onChange={this.update('borrower')} />
                        </label> 
                    </div>
                    <div className='midinput'>
                        <div >
                                <button className="leftinput" onClick={this._onCategoryClick}></button>
                                {this.state.showCategory ?
                                    <CategoryContainer setCategory={this.setCategory} category={this.state.category} /> :
                                    null
                                }
                        </div>
                        <div className='rightinput'>
                            <input className='desc' type="text" onChange={this.update('description')} placeholder="Enter a description" value={this.state.title} />
                            <div className='amount'><div className='dollar'>$</div>
                                <input className="amtinput" type="number" step="0.01" onChange={this.update('balance')} placeholder="0.00" value={this.state.balance} />
                            </div>
                        </div>
                    </div>
                    <div className='paidby'>
                            <div>Paid by </div>
                            <div className='you'>
                                <button onClick={this._onButtonClick}>{this.state.payer}</button>
                                {this.state.showComponent ?
                                    <PaidByContainer set={this.set} borrower={this.state.borrower} payer={this.state.payer}  /> :
                                    null
                                }
                            </div>
                            <div> and split</div>  <a className="equally">equally</a>.
                    </div>
                    </div>
                   <div className='buttons'>
                        <button onClick={this.props.closeModal} className="cancelbutton">Cancel</button>
                    <input type="submit" value="Save" className="savebutton" />
                    </div>
                    
                </form>
                
            </div>
        )
    }

}

export default BillForm;


// {/* <button onClick={() => this.props.openModal('paidby')} className="you">you</button> */}