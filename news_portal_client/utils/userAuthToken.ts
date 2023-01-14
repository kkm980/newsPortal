
export const saveUserToken = (token: string) => {
    localStorage.setItem('newsportal_auth', token);
};

export const deleteUserToken = () => {
    localStorage.removeItem('newsportal_auth');
};

export const getUserToken = () => {
    const token = localStorage.getItem('newsportal_auth');
    return token;
};