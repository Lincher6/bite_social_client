import { SET_USER_PROFILE, LOADING_USER, SET_USERS, FOLLOWING_IN_PROGRESS, SET_FRIENDS_LIST, LOADING_FRIENDS, SET_SEARCH_PARAMETERS, CLEAR_USERS } from "./types"


const initialState = {
    userProfile: {},
    users: [],
    searchParameters: {},
    haveMoreUsers: true,
    followingInProgress: [],
    loadingUser: false,
    loadingFriends: false,
    friendsList: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: return {
            ...state,
            userProfile: action.payload,
            loadingUser: false
        }

        case SET_USERS: return {
            ...state,
            users: action.payload,
            loadingUser: false,
            haveMoreUsers: action.payload && action.payload.length === 10

        }

        case CLEAR_USERS: return {
            ...state,
            users: []
        }

        case SET_SEARCH_PARAMETERS: return {
            ...state,
            searchParameters: action.payload
        }

        case SET_FRIENDS_LIST: return {
            ...state,
            friendsList: action.payload,
            loadingFriends: false
        }

        case FOLLOWING_IN_PROGRESS: return {
            ...state,
            followingInProgress: action.payload.isInProgress
                ? [...state.followingInProgress, action.payload.userHandle]
                : state.followingInProgress.filter(handle => handle !== action.payload.userHandle)
        }

        case LOADING_USER: return {
            ...state,
            loadingUser: true
        }

        case LOADING_FRIENDS: return {
            ...state,
            loadingFriends: true
        }

        default: return state
    }
}