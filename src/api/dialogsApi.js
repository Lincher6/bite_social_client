import axios from 'axios'

export const dialogsApi = {
    startDialog: async (dialogId, userTwo) => {
        try {
            let response = await axios.post(`/dialogs/${dialogId}`, { userTwo })
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response.data.error, resultCode: 1 }
        }
    },
}