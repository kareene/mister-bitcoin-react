import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadContact, clearContact } from '../store/actions/ContactActions';
import { addMove } from '../store/actions/UserActions';
import { TransferFund } from '../components/TransferFund';
import { MovesList } from '../components/MovesList';

import { ReactComponent as BackImg } from '../assets/img/back-arrow.svg';
import { ReactComponent as EditImg } from '../assets/img/edit.svg';

export class ContactDetailsPage extends Component {

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
        try {
            await this.props.loadContact(id);
            const { contact } = this.props;
            this.setState({ contactImg: `https://robohash.org/${contact.name}` });
        } catch(err) {
            console.log(err);
            this.props.history.push('/contact');
        }
    }

    onTransferCoins = (amount) => {
        this.props.addMove(this.props.contact, amount);
    }

    render() {
        const { contact, loggedinUser } = this.props;
        const { contactImg } = this.state;
        if (!contact) return false;
        return (
            <section className="ContactDetailsPage">
                <nav>
                    <Link to="/contact">
                        <BackImg title="Back" />
                    </Link>
                    <Link to={"/contact/edit/" + contact._id}>
                        <EditImg title="Edit" />
                    </Link>
                </nav>
                <article className="ContactInfo">
                    <div className="ImgContainer">
                        <img src={contactImg} alt={contact.name} />
                    </div>
                    <p>Name: {contact.name}</p>
                    <p>Phone: {contact.phone}</p>
                    <p>Email: {contact.email}</p>
                </article>
                <TransferFund contact={contact} maxCoins={loggedinUser.coins}
                    onTransferCoins={this.onTransferCoins} />
                <MovesList moves={[...loggedinUser.moves].filter(move => move.toId === contact._id)}
                    toContact={contact.name} />
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    contact: state.contact.currContact,
    loggedinUser: state.user.loggedinUser
})

const mapDispatchToProps = {
    loadContact,
    clearContact,
    addMove
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetailsPage);
