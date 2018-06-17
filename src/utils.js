const fetchApi = ({ method, payload={}}) => {
    return {
        method,
        headers: new Headers({
            'content-type': 'application/x-www-form-urlencoded',
        }),
        body: payload,
    }
}

export { fetchApi };
