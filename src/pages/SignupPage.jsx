import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { signup } from '../store/actions/UserActions';

import { ReactComponent as BitcoinImg } from '../assets/img/bitcoin.svg';

export class SignupPage extends Component {
    
    state = {
        username: ''
    }

    onChangeHandler = (ev) => {
        const { value, name } = ev.target;
        this.setState({ [name]: value });
    };
    
    onSubmitHandler = (ev) => {
        ev.preventDefault();
        this.props.signup(this.state.username);
        this.setState({ username: '' });
    }

    render() {
        if (this.props.loggedinUser) return <Redirect to='/' />;
        return (
            <form className="SignupPage" onSubmit={this.onSubmitHandler}>
                <BitcoinImg />
                <h3>Please enter your name:</h3>
                <input type="text" name="username" required
                    onChange={this.onChangeHandler}
                    value={this.state.username}
                />
                <button className="CallToAction" type="submit">Sign up</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    loggedinUser: state.user.loggedinUser
});

const mapDispatchToProps = {
    signup
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
