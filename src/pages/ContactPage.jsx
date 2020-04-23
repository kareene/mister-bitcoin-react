import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadContacts } from '../store/actions/ContactActions';

import { ReactComponent as AddImg } from '../assets/img/plus.svg';

import ContactList from '../components/ContactList';
import ContactFilter from '../components/ContactFilter';

export class ContactPage extends Component {

  state = {
    filterBy: { term: '' },
  };

  componentDidMount() {
    this.loadContacts();
  }

  onFilterHandler = (filterBy) => {
    this.setState((prevState) => {
      return {
        filterBy: {
          ...prevState.filterBy,
          ...filterBy,
        },
      };
    }, this.loadContacts);
  };

  loadContacts = () => {
    this.props.loadContacts(this.state.filterBy);
  };

  render() {
    const { filterBy } = this.state;
    const { contacts } = this.props;
    return (
      <section className="ContactPage">
        <ContactFilter
          filterBy={filterBy}
          onFilter={this.onFilterHandler}
        />
        <ContactList contacts={contacts} />
        <Link to="/contact/edit" className="AddContactBtn">
          <AddImg title="Add Contact" />
        </Link>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contact.contacts
})

const mapDispatchToProps = {
  loadContacts
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
