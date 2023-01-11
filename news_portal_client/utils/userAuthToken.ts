
export const saveUserToken = (token: string) => {
    localStorage.setItem('Auth', token)
}

export const deleteUserToken = () => {
    localStorage.removeItem('Auth')
}

export const getUserToken = () => {
    const token = localStorage.getItem('Auth')
    return token
}