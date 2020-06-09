import { SET_AUTHENTICATED, SET_AUTHENTICATED_PROFILE, LOADING_PROFILE, LOGOUT } from './types'
import { LIKE_BITE, UNLIKE_BITE } from "../../Bites";

const initialState = {
    authenticated: false,
    loadingProfile: false,
    credentials: {},
    likes: [],
    notifications: [],
    images: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHENTICATED: return {
            ...state,
            authenticated: action.payload
        }

        case SET_AUTHENTICATED_PROFILE: return {
            ...state,
            authenticated: true,
            loadingProfile: false,
            ...action.payload
        }

        case LOGOUT: return {
            ...state,
            authenticated: false,
            credentials: {},
        }

        case LIKE_BITE:
            const like = {
                biteId: action.payload.biteId,
                userHandle: state.credentials.handle
            }

            return {
                ...state,
                likes: [...state.likes, like]
            }

        case UNLIKE_BITE:
            return {
                ...state,
                likes: state.likes.filter(like => like.biteId !== action.payload.biteId)
            }

        case LOADING_PROFILE: return {
            ...state,
            loadingProfile: true
        }

        default: return state
    }
}