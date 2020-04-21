import React from 'react';
import { Link } from 'react-router-dom';

export function ContactPreview(props) {
    const { contact } = props;
    const contactImg = `https://robohash.org/${contact.name}`;
    return (
        <Link className="ContactPreview" to={'/contact/' + contact._id}>
            <div className="ImgContainer">
                <img src={contactImg} alt={contact.name} />
            </div>
            <h3>{contact.name}</h3>
        </Link>
    )
}

export default ContactPreview;