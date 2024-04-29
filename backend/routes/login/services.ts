function login(user: string, password: string) {
    // TODO: Implement login with database
    return true;
}

function getUserByEmail(email: string) {
    // TODO: Implement get user by email with database
    return { id: 1, email: email };
}

export default { login, getUserByEmail };