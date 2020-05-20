import jwtDecode from 'jwt-decode'
import { userActions } from '../model/user'

export const useInitialization = (dispatch, history) => {

    const token = localStorage.idToken
    if (token) {
        const decodedToken = jwtDecode(token)
        if (decodedToken.exp * 1000 < Date.now()) {
            dispatch(userActions.logout(history))
        } else {
            dispatch(userActions.autoLogin(token))
        }
    } else {
        dispatch(userActions.logout(history))
    }
}