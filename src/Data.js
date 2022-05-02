import React, { useEffect } from 'react';
import axios from 'axios'

import { API } from "./config/api";



const Data = () => {

    const getDATA = async () => {
        const baseURL = process.env.REACT_APP_DATA_API;
        const tarURL = API + '/data';
        const res = await axios.get(baseURL)

        axios
            .post(tarURL, {
                "data": res.data,
            })
    }

    useEffect(() => {
        getDATA();
    }, [])

    return (<></>);
}

export default Data;