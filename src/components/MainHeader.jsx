import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as HomeImg } from '../assets/img/home.svg';
import { ReactComponent as ContactsImg } from '../assets/img/contacts.svg';
import { ReactComponent as StatisticsImg } from '../assets/img/statistics.svg';
import { ReactComponent as LogoutImg } from '../assets/img/logout.svg';

export function MainHeader() {
    // return (
    //     <header className="MainHeader">
    //         <h1>Mister Bitcoin</h1>
    //     </header>
    // )
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
                <NavLink activeClassName="active" to="/signup">
                    <LogoutImg title="Logout" />
                </NavLink>
            </nav>
        </header>
    )
}

export default MainHeader;
