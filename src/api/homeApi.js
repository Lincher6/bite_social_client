import axios from 'axios'

export const homeApi = {
    getBites: async () => {
        try {
            return await axios.get('/bites')
        } catch (e) {
            return { error: e}
        }
    }
}