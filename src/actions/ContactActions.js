import ContactService from '../services/ContactService';

export function loadContacts() {
    return async dispatch => {
        const contacts = await ContactService.getContacts();
        dispatch({ type: 'SET_CONTACTS', contacts })
    }
}