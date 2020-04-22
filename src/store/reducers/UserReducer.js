const initialState = {
    loggedinUser: null
}

export default function ContactReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_LOGGEDIN_USER':
            return { ...state, loggedinUser: action.loggedinUser };
        default:
            return state;
    };
}
