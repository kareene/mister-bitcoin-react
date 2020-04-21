const initialState = {
    contacts: [],
    currContact: null
}

export default function ContactReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CONTACTS':
            return { ...state, contacts: action.contacts }
        default:
            return state;
    }
};