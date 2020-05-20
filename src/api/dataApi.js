import axios from 'axios'

export const dataApi = {
    getBites: async () => {
        try {
            let response = await axios.get('/bites')
            return { data: response.data, resultCode: 0}
        } catch (e) {
            return { error: e.response.data.error, resultCode: 1}
        }
    }
}