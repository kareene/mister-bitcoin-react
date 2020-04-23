import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadContact, clearContact, saveContact, deleteContact } from '../store/actions/ContactActions';

import { ReactComponent as BackImg } from '../assets/img/back-arrow.svg';
import { ReactComponent as DeleteImg } from '../assets/img/trash.svg';
import robotImg from '../assets/img/robot.svg';

export class ContactEditPage extends Component {
    
    state = {
        contact: null,
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
        try {
            await this.props.loadContact(id);
            const { currContact } = this.props;
            const contactImg = (currContact.name)
                ? `https://robohash.org/${currContact.name}`
                : robotImg;
            this.setState({ contact: { ...currContact }, contactImg });
        } catch(err) {
            console.log(err);
            this.props.history.push('/contact');
        }
    }

    onChangeHandler = (ev) => {
        const { value, name } = ev.target;
        this.setState({ contact: { ...this.state.contact, [name]: value } });
    }
    
    onSubmitHandler = async (ev) => {
        ev.preventDefault();
        const contact = await this.props.saveContact(this.state.contact);
        if (contact) this.props.history.push(`/contact/${contact._id}`);
        else this.props.history.push('/contact');
    }

    onBackClickHandler = (ev) => {
        this.props.history.go(-1);
    }
    
    onDeleteClickHandler = (ev) => {
        this.props.deleteContact(this.state.contact._id);
        this.props.history.push('/contact');
    }

    render() {
        const { contactImg, contact } = this.state;
        if (!contact) return false;
        return (
            <section className="ContactEditPage">
                <nav>
                    <button onClick={this.onBackClickHandler}>
                        <BackImg title="Back" />
                    </button>
                    <button hidden={!contact._id} onClick={this.onDeleteClickHandler}>
                        <DeleteImg title="Delete" />
                    </button>
                </nav>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="ImgContainer">
                        <img src={contactImg} alt={contact.name} />
                    </div>
                    <section>
                        <label htmlFor="name">Name<span>*</span></label>
                        <input type="text" name="name" id="name"
                            required
                            placeholder="Name"
                            onChange={this.onChangeHandler}
                            value={contact.name}
                        />
                    </section>
                    <section>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" id="phone"
                            placeholder="Phone"
                            onChange={this.onChangeHandler}
                            value={contact.phone}
                        />
                    </section>
                    <section>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email"
                            placeholder="Email"
                            onChange={this.onChangeHandler}
                            value={contact.email}
                        />
                    </section>
                    <button className="CallToAction" type="submit">Save</button>
                </form>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    currContact: state.contact.currContact
})

const mapDispatchToProps = {
    loadContact,
    clearContact,
    saveContact,
    deleteContact
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactEditPage);
