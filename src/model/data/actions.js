import { SET_BITES } from "./types"
import { uiActions } from '../ui'
import { dataApi } from '../../api/dataApi'

const serBites_AC = payload => ({
    type: SET_BITES,
    payload
})

export const getBites = () => async dispatch => {
    dispatch(uiActions.loadingUI_AC())
    const bitesData = await dataApi.getBites()
    if (bitesData.resultCode === 0) {
        dispatch(serBites_AC(bitesData.data))
        dispatch(uiActions.clearErrors_AC())
    } else {
        dispatch(uiActions.setErrors_AC({ error: bitesData.error }))
    }
}