import React, { useEffect } from 'react';
import axios from 'axios'

import { API } from "./config/api";



const Data = () => {

    const getDATA = async () => {
        const baseURL = process.env.REACT_APP_BASE_URL;
        // const tarURL = process.env.REACT_APP_TARGET_URL;
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