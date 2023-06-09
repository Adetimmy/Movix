'use client'
import React, { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../utils/api';

export const useFetch = (url) => {

    const [ loading, setLoading ] = useState(true);
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);

    useEffect(() => {

        fetchDataFromApi(url)
        .then((response) => {
            setLoading(false);
            setData(response);
        })
        .catch((error) => {
            setLoading(true);
            setError(error);
        })
    }, [url]);

    return { data, loading, error }
}

export default useFetch