import { SET_USER_PROFILE, LOADING_USER, SET_USERS } from "./types"
import { usersApi } from "../../../api/usersApi"
import { uiActions } from "../../Navigation"


const setUserProfile_AC = payload => ({
    type: SET_USER_PROFILE,
    payload
})

const loadingUser_AC = () => ({
    type: LOADING_USER,
})

const setUsers_AC = (payload) => ({
    type: SET_USERS,
    payload
})

export const getUserProfile = userHandle => async dispatch => {
    dispatch(loadingUser_AC())
    const userData = await usersApi.getUserProfile(userHandle)
    if (userData.resultCode === 0) {
        dispatch(setUserProfile_AC(userData.data))
    } else {
        dispatch(uiActions.setErrors_AC({ error: userData.error }))
        throw new Error(userData.error)
    }
}

export const getUsers = () => async dispatch => {
    dispatch(loadingUser_AC())
    const usersData = await usersApi.getUsers()
    if (usersData.resultCode === 0) {
        dispatch(setUsers_AC(usersData.data))
    } else {
        dispatch(uiActions.setErrors_AC({ error: usersData.error }))
        throw new Error(usersData.error)
    }
}