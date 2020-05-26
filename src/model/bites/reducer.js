import {ADD_BITE, DELETE_BITE, LIKE_BITE, LOADING_BITES, SET_BITES, UNLIKE_BITE} from './types'
import {bites} from "./selectors";

const initialState = {
    bites: [],
    loadingBites: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_BITES: return {
            ...state,
            bites: action.payload,
            loadingBites: false
        }

        case ADD_BITE: return {
            ...state,
            bites: [action.payload, ...state.bites]
        }

        case LOADING_BITES: return {
            ...state,
            loadingBites: true
        }

        case LIKE_BITE:
        case UNLIKE_BITE:
            const biteIndex = state.bites.findIndex(bite => bite.biteId === action.payload.biteId)
            state.bites[biteIndex] = action.payload
            return {
            ...state,
                bites: [...state.bites]
        }

        case DELETE_BITE: return {
            ...state,
            bites: state.bites.filter( bite => bite.biteId !== action.payload)
        }

        default: return state
    }
}