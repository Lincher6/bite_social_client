import { LOADING_UI, SET_ERRORS, CLEAR_ERRORS } from './types'

export const loadingUI_AC = () => ({
    type: LOADING_UI
})

export const setErrors_AC = (payload) => ({
    type: SET_ERRORS,
    payload
})

export const clearErrors_AC = () => ({
    type: CLEAR_ERRORS
})