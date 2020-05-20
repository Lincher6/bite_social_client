import axios from 'axios'

export const authApi = {
    auth: async (credentials, type) => {
        try {
            let response = await axios.post(`/${type}`, credentials)
            return { data: response.data, resultCode: 0}
        } catch (e) {
            return { error: e.response.data.error, resultCode: 1}
        }
    }
}