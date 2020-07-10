import { SET_USER_PROFILE, LOADING_USER, SET_USERS, FOLLOW, UNFOLLOW, FOLLOWING_IN_PROGRESS, SET_FRIENDS_LIST, LOADING_FRIENDS, SET_SEARCH_PARAMETERS, CLEAR_USERS, CLEAR_PARAMS } from "./types"
import { usersApi } from "api/usersApi"
import { uiActions } from "features/Navigation"


const setUserProfile_AC = payload => ({
    type: SET_USER_PROFILE,
    payload
})

const loadingUser_AC = () => ({
    type: LOADING_USER,
})

const loadingFriends_AC = () => ({
    type: LOADING_FRIENDS,
})

const setUsers_AC = (payload) => ({
    type: SET_USERS,
    payload
})

export const clearUsers_AC = () => ({
    type: CLEAR_USERS,
})

export const clearParams_AC = () => ({
    type: CLEAR_PARAMS,
})

export const setSearchParams_AC = (payload) => ({
    type: SET_SEARCH_PARAMETERS,
    payload
})

const setFriendsList_AC = (payload) => ({
    type: SET_FRIENDS_LIST,
    payload
})

const follow_AC = (payload) => ({
    type: FOLLOW,
    payload
})

const unfollow_AC = (payload) => ({
    type: UNFOLLOW,
    payload
})

const folloeingInProgress_AC = (payload) => ({
    type: FOLLOWING_IN_PROGRESS,
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

export const getUsers = (offset = 0, searchParams) => async dispatch => {
    dispatch(loadingUser_AC())
    const usersData = await usersApi.getUsers(offset, searchParams)
    if (usersData.resultCode === 0) {
        dispatch(setUsers_AC(usersData.data))
    } else {
        dispatch(uiActions.setErrors_AC({ error: usersData.error }))
        throw new Error(usersData.error)
    }
}

export const getFriendsList = (offset = 0, friendHandles) => async dispatch => {
    dispatch(loadingFriends_AC())
    const friendsData = await usersApi.getFriends(offset, friendHandles)
    if (friendsData.resultCode === 0) {
        dispatch(setFriendsList_AC(friendsData.data))
    } else {
        dispatch(uiActions.setErrors_AC({ error: friendsData.error }))
        throw new Error(friendsData.error)
    }
}

export const follow = (userHandle, follow) => async dispatch => {
    dispatch(folloeingInProgress_AC({ userHandle, isInProgress: true }))
    const followData = await usersApi.follow(userHandle, follow)
    if (followData.resultCode === 0) {
        if (follow) {
            dispatch(follow_AC(userHandle))
        } else {
            dispatch(unfollow_AC(userHandle))
        }
        dispatch(folloeingInProgress_AC({ userHandle, isInProgress: false }))
    } else {
        dispatch(uiActions.setErrors_AC({ error: followData.error }))
        throw new Error(followData.error)
    }
}