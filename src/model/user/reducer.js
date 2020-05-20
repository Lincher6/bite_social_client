import { SET_AUTHENTICATED, SET_USER, LOADING_USER } from './types'

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

        case LOADING_USER: return {
            ...state,
            loadingUser: true
        }

        default: return state
    }
}