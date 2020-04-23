import React, { Component } from 'react';

export class TransferFund extends Component {

    state = {
        amount: ''
    }

    onChangeHandler = (ev) => {
        const { value, name } = ev.target;
        this.setState({ [name]: value });
    };
    
    onSubmitHandler = (ev) => {
        ev.preventDefault();
        this.props.onTransferCoins(this.state.amount);
        this.setState({ amount: '' });
    }

    render() {
        const { contact, maxCoins } = this.props;
        return (
            <section className="TransferFund">
                <p>Transfer coins to {contact.name}</p>
                <form onSubmit={this.onSubmitHandler}>
                    <input type="number" step="0.0001" name="amount"
                        placeholder="Amount"
                        min="0.0001" max={maxCoins} required
                        onChange={this.onChangeHandler}
                        value={this.state.amount}
                    />
                    <button className="CallToAction" type="submit">Transfer</button>
                </form>
            </section>
        )
    }
}

export default TransferFund;
