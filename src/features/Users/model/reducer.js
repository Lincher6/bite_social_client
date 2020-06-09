import { SET_USER_PROFILE, LOADING_USER, SET_USERS } from "./types"


const initialState = {
    userProfile: {},
    users: [],
    loadingUser: false
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
            loadingUser: false

        }

        case LOADING_USER: return {
            ...state,
            loadingUser: true
        }

        default: return state
    }
}