import jwtDecode from 'jwt-decode'
import { userActions } from '../model/user'
import {useDispatch} from "react-redux";

export const useInitialization = async () => {
    const dispatch = useDispatch()

    const token = localStorage.idToken
    if (token) {
        const decodedToken = jwtDecode(token)
        if (decodedToken.exp * 1000 < Date.now()) {
            dispatch(userActions.logout())
        } else {
            await dispatch(userActions.autoLogin(token))
            tokenChecker(dispatch)
        }
    } else {
        dispatch(userActions.logout())
    }
}

export const tokenChecker = (dispatch) => {
    const token = localStorage.idToken
    if (token) {
        const decodedToken = jwtDecode(token)
        if (decodedToken.exp * 1000 < Date.now()) {
            dispatch(userActions.logout())
            alert('Время сессии истекло')
        } else {
            setTimeout(() => tokenChecker(dispatch), 5000)
        }
    } else {
        dispatch(userActions.logout())
    }
}