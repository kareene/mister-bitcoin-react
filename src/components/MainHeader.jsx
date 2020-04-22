import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadUser, logout } from '../actions/UserActions';

import { ReactComponent as HomeImg } from '../assets/img/home.svg';
import { ReactComponent as ContactsImg } from '../assets/img/contacts.svg';
import { ReactComponent as StatisticsImg } from '../assets/img/statistics.svg';
import { ReactComponent as LogoutImg } from '../assets/img/logout.svg';

export class MainHeader extends Component {

    constructor(props) {
        super(props);
        props.loadUser();
    }

    onLogoutClickHandler = () => {
        this.props.logout();
        this.props.history.push('/signup')
    }

    render() {
        if (!this.props.loggedinUser) {
            return (
                <header className="MainHeader">
                    <h1>Mister Bitcoin</h1>
                </header>
            )
        }
        return (
            <header className="MainHeader">
                <nav>
                    <NavLink activeClassName="active" exact to="/">
                        <HomeImg title="Home" />
                    </NavLink>
                    <NavLink activeClassName="active" exact to="/contact">
                        <ContactsImg title="Contacts" />
                    </NavLink>
                    <NavLink activeClassName="active" to="/statistic">
                        <StatisticsImg title="Statistics" />
                    </NavLink>
                    <button onClick={this.onLogoutClickHandler}>
                        <LogoutImg title="Logout" />
                    </button>
                </nav>
            </header>
        )
    }
}

const mapStateToProps = (state) => ({
    loggedinUser: state.user.loggedinUser
})

const mapDispatchToProps = {
  loadUser,
  logout
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainHeader));
