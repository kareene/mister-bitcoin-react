import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadContact, clearContact, saveContact, deleteContact } from '../actions/ContactActions';

import { ReactComponent as BackImg } from '../assets/img/back-arrow.svg';
import { ReactComponent as DeleteImg } from '../assets/img/trash.svg';
import robotImg from '../assets/img/robot.svg';

export class ContactEditPage extends Component {
    
    state = {
        contactImg: ''
    }

    componentDidMount() {
        this.loadContact();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact();
        }
    }

    componentWillUnmount() {
        this.props.clearContact();
    }

    async loadContact() {
        const id = this.props.match.params.id;
        await this.props.loadContact(id);
        const { contact } = this.props;
        if (contact) {
            const contactImg = (contact.name) ? `https://robohash.org/${contact.name}` : robotImg;
            this.setState({ contactImg });
        }
    }

    onChangeHandler = (ev) => {
        const { value, name } = ev.target;
        this.setState({ [name]: value });
    }
    
    onSubmitHandler = (ev) => {
        ev.preventDefault();
        // this.props.signup(this.state.username);
        // this.setState({ username: '' });
    }

    onBackClickHandler = (ev) => {
        this.props.history.go(-1);
    }
    
    onDeleteClickHandler = (ev) => {
    }

    render() {
        return (
            <section className="ContactEditPage">
                <nav>
                    <button onClick={this.onBackClickHandler}>
                        <BackImg title="Back" />
                    </button>
                    <button onClick={this.onDeleteClickHandler}>
                        <DeleteImg title="Delete" />
                    </button>
                </nav>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    contact: state.contact.currContact
})

const mapDispatchToProps = {
    loadContact,
    clearContact,
    saveContact,
    deleteContact
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactEditPage);
