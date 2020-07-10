import jwtDecode from 'jwt-decode'
import { profileActions } from 'features/Profile/model'
import { useDispatch } from "react-redux";
import Axios from 'axios';

export const useInitialization = async () => {
    const dispatch = useDispatch()
    Axios.defaults.baseURL = 'https://europe-west2-socialbug-6991e.cloudfunctions.net/api'

    const token = localStorage.idToken
    if (token) {
        const decodedToken = jwtDecode(token)
        if (decodedToken.exp * 1000 < Date.now()) {
            dispatch(profileActions.logout())
        } else {
            await dispatch(profileActions.autoLogin(token))
            tokenChecker(dispatch)
        }
    } else {
        dispatch(profileActions.logout())
    }
}

export const tokenChecker = (dispatch) => {
    const token = localStorage.idToken
    if (token) {
        const decodedToken = jwtDecode(token)
        if (decodedToken.exp * 1000 < Date.now()) {
            dispatch(profileActions.logout())
            alert('Время сессии истекло')
        } else {
            setTimeout(() => tokenChecker(dispatch), 5000)
        }
    } else {
        dispatch(profileActions.logout())
    }
}