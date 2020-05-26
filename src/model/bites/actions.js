import {ADD_BITE, DELETE_BITE, LIKE_BITE, LOADING_BITES, SET_BITES, UNLIKE_BITE} from "./types"
import { uiActions } from '../ui'
import { bitesApi } from '../../api/bitesApi'

const serBites_AC = payload => ({
    type: SET_BITES,
    payload
})

const addBite_AC = payload => ({
    type: ADD_BITE,
    payload
})

const likeBite_AC = payload => ({
    type: LIKE_BITE,
    payload
})

const unlikeBite_AC = payload => ({
    type: UNLIKE_BITE,
    payload
})

const loadingBites_AC = () => ({
    type: LOADING_BITES,
})

const deleteBite_AC = (payload) => ({
    type: DELETE_BITE,
        payload
})

export const getBites = () => async dispatch => {
    dispatch(loadingBites_AC())
    const bitesData = await bitesApi.getBites()
    if (bitesData.resultCode === 0) {
        dispatch(serBites_AC(bitesData.data))
        dispatch(uiActions.clearErrors_AC())
    } else {
        dispatch(uiActions.setErrors_AC({ error: bitesData.error }))
    }
}

export const addBite = (bite) => async dispatch => {
    dispatch(uiActions.loadingUI_AC())
    const biteData = await bitesApi.addBite(bite)
    if (biteData.resultCode === 0) {
        dispatch(addBite_AC(biteData.data))
        dispatch(uiActions.clearErrors_AC())
    } else {
        dispatch(uiActions.setErrors_AC({ error: biteData.error }))
    }
}

export const likeBite = (biteId) => async dispatch => {
    const biteData = await bitesApi.likeBite(biteId)
    if (biteData.resultCode === 0) {
        dispatch(likeBite_AC(biteData.data))
    } else {
        dispatch(uiActions.setErrors_AC({ error: biteData.error }))
    }
}

export const unlikeBite = (biteId) => async dispatch => {
    const biteData = await bitesApi.unlikeBite(biteId)
    if (biteData.resultCode === 0) {
        dispatch(unlikeBite_AC(biteData.data))
    } else {
        dispatch(uiActions.setErrors_AC({ error: biteData.error }))
    }
}

export const deleteBite = (biteId) => async dispatch => {
    const biteData = await bitesApi.deleteBite(biteId)
    if (biteData.resultCode === 0) {
        dispatch(deleteBite_AC(biteId))
    } else {
        dispatch(uiActions.setErrors_AC({ error: biteData.error }))
    }
}