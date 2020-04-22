var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

function getUser() {
    return JSON.parse(JSON.stringify(loggedInUser));
}

function signup(name) {
    loggedInUser = {
        name,
        coins: 100,
        moves: []
    }
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    return getUser();
}

function logout() {
    if (!loggedInUser) return;
    loggedInUser = null;
    localStorage.removeItem('loggedInUser');
}

function addMove(contact, amount) {
    const move = {
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount: amount
    }
    loggedInUser.coins -= amount;
    loggedInUser.moves.unshift(move);
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    return getUser();
}

export default {
    getUser,
    signup,
    logout,
    addMove
}