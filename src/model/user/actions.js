import { SET_AUTHENTICATED, SET_USER, LOADING_USER } from './types'
import { uiActions } from '../ui'
import { authApi } from '../../api/authApi'
import { userApi } from '../../api/userApi'
import axios from 'axios'

const setAuthenticated_AC = payload => ({
    type: SET_AUTHENTICATED,
    payload
})

const setUser_AC = payload => ({
    type: SET_USER,
    payload
})

const loadingUser_AC = () => ({
    type: LOADING_USER,
})

export const login = (credentials, history) => async dispatch => {
    await authFlow(credentials, history, dispatch, 'login')
}

export const signUp = (credentials, history) => async dispatch => {
    await authFlow(credentials, history, dispatch, 'signUp')
}

export const logout = (history) => async dispatch => {
    localStorage.removeItem('idToken')
    delete axios.defaults.headers.common['Authorization']
    dispatch(setAuthenticated_AC(false))
    history.push('/login')
}

export const autoLogin = (token) => async dispatch => {
    dispatch(setAuthenticated_AC(true))
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    await dispatch(getUserData())
}

const getUserData = () => async dispatch => {
    dispatch(loadingUser_AC())
    const userData = await userApi.getCurrentUser()
    if (userData.resultCode === 0) {
        dispatch(setUser_AC(userData.data))
    } else {
        dispatch(uiActions.setErrors_AC({ error: userData.error }))
        throw new Error(userData.error)
    }
}

const authFlow = async (credentials, history, dispatch, type) => {
    dispatch(uiActions.loadingUI_AC())
    const tokenData = await authApi.auth(credentials, type)
    if (tokenData.resultCode === 0) {
        localStorage.setItem('idToken', tokenData.data.token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${tokenData.data.token}`
        await dispatch(getUserData())
        dispatch(uiActions.clearErrors_AC())
        history.push('/')
    } else {
        dispatch(uiActions.setErrors_AC({ error: tokenData.error }))
    }
}