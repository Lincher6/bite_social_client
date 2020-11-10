import axios from 'axios'

export const authApi = {
    auth: async (credentials: Object, type: string) => {
        try {
            let response = await axios.post(`/${type}`, credentials)
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return {
                error: e.response ? e.response.data.error : e,
                resultCode: 1
            }
        }
    }
}