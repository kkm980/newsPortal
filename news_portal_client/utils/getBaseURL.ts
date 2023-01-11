import {useEffect} from 'react'
const getBaseURL = (x: string) => {
    let baseUrl: string="http://localhost:8000";
    // useEffect(() => {
    //     const hostHas = (x: string) => window.location.hostname.includes(x)
    //     if (hostHas(x)) {
    //         baseUrl = 'http://localhost:8000'
    //     } else {
    //         // baseUrl = ''
    //     }
    //     // if host is localhost then rtk Query will have local instance of API as base url.

    // }, [])

    return baseUrl
}

export default getBaseURL