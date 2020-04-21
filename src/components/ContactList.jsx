import React from 'react'

import ContactPreview from '../components/ContactPreview';

export function ContactList(props) {
    const { contacts } = props;
    return (
        <ul className="ContactList">
            {contacts.map(contact => (
                <li  key={contact._id}>
                    <ContactPreview contact={contact} />
                </li>
            ))}
        </ul>
    )
}

export default ContactList;