import { SET_AUTHENTICATED, SET_USER, LOADING_USER } from './types'
import { uiActions } from '../ui'
import { authApi } from '../../api/authApi'
import { userApi } from '../../api/userApi'
import axios from 'axios'
import imageCompression from 'browser-image-compression'
import {tokenChecker} from "../../hooks/useInitialization";

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

export const logout = () => async dispatch => {
    localStorage.removeItem('idToken')
    delete axios.defaults.headers.common['Authorization']
    dispatch(setAuthenticated_AC(false))
}

export const autoLogin = (token) => async dispatch => {
    dispatch(setAuthenticated_AC(true))
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    await dispatch(getUserData())
}

export const uploadImage = (imageFile) => async dispatch => {
    if (imageFile) {
        dispatch(loadingUser_AC())

        const options = {
            maxSizeMB: 0.4,
            maxWidthOrHeight: 700,
            useWebWorker: true
        }
        const compressedImageFile = await imageCompression(imageFile, options);

        const formData = new FormData()
        formData.append('image', compressedImageFile, imageFile.name)
        const imageData = await userApi.uploadImage(formData)
        if (imageData.resultCode === 0) {
            dispatch(getUserData())
        } else {
            dispatch(uiActions.setErrors_AC({ error: imageData.error }))
            throw new Error(imageData.error)
        }
    }
}

export const editUserData = (userData) => async dispatch => {
    dispatch(loadingUser_AC())
    const result = await userApi.editUserData(userData)
    if (result.resultCode === 0) {
        dispatch(getUserData())
    } else {
        dispatch(uiActions.setErrors_AC({ error: result.error }))
        throw new Error(result.error)
    }
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
        tokenChecker(dispatch)
        history.push('/')
    } else {
        dispatch(uiActions.setErrors_AC({ error: tokenData.error }))
    }
}