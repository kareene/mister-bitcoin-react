import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadUser } from '../actions/UserActions';
import BitcoinService from '../services/BitcoinService'
import MovesList from '../components/MovesList';

import { ReactComponent as CoinsImg } from '../assets/img/coins.svg';
import { ReactComponent as BitcoinImg } from '../assets/img/bitcoin.svg';

export class HomePage extends Component {

    state = {
        btcRate: '',
    };

    async componentDidMount() {
        const btcRate = await BitcoinService.getRate(1);
        this.setState({ btcRate });
    }

    render() {
        const { loggedinUser } = this.props;
        const { btcRate } = this.state;
        if (!loggedinUser) return false;
        return (
            <section className="HomePage">
                <h2>Hello {loggedinUser.name}!</h2>
                <div>
                    <CoinsImg />
                    <p>Coins: {loggedinUser.coins}</p>
                </div>
                <div>
                    <BitcoinImg />
                    <p>USD to BTC: {btcRate}</p>
                </div>
                <MovesList moves={loggedinUser.moves} />
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    loggedinUser: state.user.loggedinUser
})

const mapDispatchToProps = {
    loadUser
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
