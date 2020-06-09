import axios from 'axios'

export const usersApi = {
    getUserProfile: async (userHandle) => {
        try {
            let response = await axios.get(`/user/${userHandle}`)
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response.data.error, resultCode: 1 }
        }
    },

    getUsers: async (offset = 0) => {
        try {
            let response = await axios.get(`/users`, { params: { offset: 0 } })
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response.data.error, resultCode: 1 }
        }
    },
}