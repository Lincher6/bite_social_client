import { SET_AUTHENTICATED, SET_USER, LOADING_USER } from './types'
import {LIKE_BITE, UNLIKE_BITE} from "../bites/types";

const initialState = {
    authenticated: false,
    loadingUser: false,
    credentials: {},
    likes: [],
    notifications: [] 
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTHENTICATED: return {
            ...state,
            authenticated: action.payload
        }

        case SET_USER: return {
            ...state,
            authenticated: true,
            loadingUser: false,
            ...action.payload
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

        case LOADING_USER: return {
            ...state,
            loadingUser: true
        }

        default: return state
    }
}