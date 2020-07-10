import { SET_AUTHENTICATED, SET_AUTHENTICATED_PROFILE, LOADING_PROFILE, LOGOUT, MARK_NOTIFICATIONS } from './types'
import { uiActions } from 'features/Navigation'
import { authApi } from 'api/authApi'
import { profileApi } from 'api/profileApi'
import axios from 'axios'
import imageCompression from 'browser-image-compression'
import { tokenChecker } from "lib/hooks/useInitialization";

const setAuthenticated_AC = payload => ({
    type: SET_AUTHENTICATED,
    payload
})

const setAuthenticatedProfile_AC = payload => ({
    type: SET_AUTHENTICATED_PROFILE,
    payload
})

const loadingProfile_AC = () => ({
    type: LOADING_PROFILE,
})

const markNotifications_AC = () => ({
    type: MARK_NOTIFICATIONS,
})

const logout_AC = () => ({
    type: LOGOUT,
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
    dispatch(logout_AC())
}

export const autoLogin = (token) => async dispatch => {
    dispatch(setAuthenticated_AC(true))
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    await dispatch(getAuthenticatedProfile())
}

export const uploadImage = (imageFile) => async dispatch => {
    if (imageFile) {
        dispatch(loadingProfile_AC())

        const options = {
            maxSizeMB: 0.4,
            maxWidthOrHeight: 700,
            useWebWorker: true
        }
        const compressedImageFile = await imageCompression(imageFile, options);

        const formData = new FormData()
        formData.append('image', compressedImageFile, imageFile.name)
        const imageData = await profileApi.uploadImage(formData)
        if (imageData.resultCode === 0) {
            dispatch(getAuthenticatedProfile())
        } else {
            dispatch(uiActions.setErrors_AC({ error: imageData.error }))
            throw new Error(imageData.error)
        }
    }
}

export const editProfileData = (profileData) => async dispatch => {
    dispatch(loadingProfile_AC())
    const result = await profileApi.editProfileData(profileData)
    if (result.resultCode === 0) {
        dispatch(getAuthenticatedProfile())
    } else {
        dispatch(uiActions.setErrors_AC({ error: result.error }))
        throw new Error(result.error)
    }
}

export const markNotifications = (notificationIds) => async dispatch => {
    const result = await profileApi.markNotifications(notificationIds)
    if (result.resultCode === 0) {
        dispatch(markNotifications_AC())
    } else {
        dispatch(uiActions.setErrors_AC({ error: result.error }))
        throw new Error(result.error)
    }
}

const getAuthenticatedProfile = () => async dispatch => {
    dispatch(loadingProfile_AC())
    const profileData = await profileApi.getAuthenticatedProfile()
    if (profileData.resultCode === 0) {
        dispatch(setAuthenticatedProfile_AC(profileData.data))
    } else {
        dispatch(uiActions.setErrors_AC({ error: profileData.error }))
        throw new Error(profileData.error)
    }
}

const authFlow = async (credentials, history, dispatch, type) => {
    dispatch(uiActions.loadingUI_AC())
    const tokenData = await authApi.auth(credentials, type)
    if (tokenData.resultCode === 0) {
        localStorage.setItem('idToken', tokenData.data.token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${tokenData.data.token}`
        await dispatch(getAuthenticatedProfile())
        dispatch(uiActions.clearErrors_AC())
        tokenChecker(dispatch)
        history.push('/')
    } else {
        dispatch(uiActions.setErrors_AC({ error: tokenData.error }))
    }
}