import ContactService from '../services/ContactService';

export function loadContacts(filterBy) {
    return async dispatch => {
        const contacts = await ContactService.getContacts(filterBy);
        dispatch({ type: 'SET_CONTACTS', contacts });
    }
}

export function loadContact(contactId) {
    return async dispatch => {
        if (contactId) {
            const contact = await ContactService.getContactById(contactId);
            dispatch({ type: 'SET_CURR_CONTACT', contact });
        } else {
            const contact = ContactService.getEmptyContact();
            dispatch({ type: 'SET_CURR_CONTACT', contact });
        }
    }
}

export function clearContact() {
    return async dispatch => {
        dispatch({ type: 'SET_CURR_CONTACT', contact: null });
    }
}

export function saveContact(contact) {
    return async dispatch => {
        const isUpdate = !!contact._id;
        contact = await ContactService.saveContact(contact);
        if (isUpdate) dispatch({ type: 'UPDATE_CONTACT', contact });
        else dispatch({ type: 'ADD_CONTACT', contact });
        return contact;
    }
}

export function deleteContact(contactId) {
    return async dispatch => {
        await ContactService.deleteContact(contactId);
        dispatch({ type: 'DELETE_CONTACT', contactId })
    }
}
