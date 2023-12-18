import React, { useEffect } from 'react';
import axios from 'axios'

import { API } from "./config/api";



const Data = () => {

    const getDATA = async () => {
        try {
            const baseURL = process.env.REACT_APP_DATA_API;
            const tarURL = API + '/data';
            const res = await axios.get(baseURL)
                            .then(res => res)
                            .catch(err => err)
            
            axios
                .post(tarURL, {
                    "data": res.data,
                })
                .then(res => res)
                .catch(err => err)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getDATA();
    }, [])

    return (<></>);
}

export default Data;