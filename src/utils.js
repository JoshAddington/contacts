const fetchApi = ({ method, payload={}}) => {
    return {
        method,
        headers: new Headers({
            'content-type': 'application/x-www-form-urlencoded',
        }),
        body: payload,
    }
}
const fetchAuthApi = ({ method, id='', secret='', payload={}}) => {
    return {
        method,
        headers: new Headers({
            'content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(id + ':' + secret),
        }),
        body: payload,
    }
}

export { fetchApi, fetchAuthApi };
