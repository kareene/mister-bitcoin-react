import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadContacts } from '../actions/ContactActions';

import { ReactComponent as AddImg } from '../assets/img/plus.svg';

import ContactList from '../components/ContactList';
import ContactFilter from '../components/ContactFilter';

export class ContactPage extends Component {
  state = {
    filterBy: { term: '' },
  };

  async componentDidMount() {
    this.props.loadContacts();
  }

  // loadContacts = async () => {
  //   const contacts = await ContactService.getContacts(this.state.filterBy);
  //   this.setState({ contacts });
  // };

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
