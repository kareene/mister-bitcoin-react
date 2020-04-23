import UserService from '../../services/UserService';

export function loadUser() {
    return dispatch => {
        const loggedinUser = UserService.getUser();
        dispatch({ type: 'SET_LOGGEDIN_USER', loggedinUser });
    }
}

export function signup(name) {
    return dispatch => {
        const loggedinUser = UserService.signup(name);
        dispatch({ type: 'SET_LOGGEDIN_USER', loggedinUser });
    }
}

export function logout() {
    return dispatch => {
        UserService.logout();
        dispatch({ type: 'SET_LOGGEDIN_USER', loggedinUser: null });
    }
}

export function addMove(contact, amount) {
    return dispatch => {
        const loggedinUser = UserService.addMove(contact, amount);
        dispatch({ type: 'SET_LOGGEDIN_USER', loggedinUser });
    }
}