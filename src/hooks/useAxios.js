import React, {useState, useCallback} from "react";
import Axios from "axios";
import {BASE_URL} from "../_settings/constants";

export const useAxios = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'GET', data = null, headers = {}) => {
        try {
            setLoading(true)
            const response = await Axios({
                url,
                method,
                data,
                headers
            })
            if (response.statusText !== 'OK') {
                throw new Error(response.data || 'Возникла ошибка')
            }
            setLoading(false)
            return response.data

        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearErrors = useCallback(() => setError(null), [])

    return {request, loading, error, clearErrors}
}


