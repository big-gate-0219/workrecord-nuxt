import qs from "qs";

export class RequestClient {
    constructor(axios, cookies, store) {
        this.axios = axios
        this.cookies = cookies
        this.store = store
        this.hasRetried = false
    }

    async get(uri, params = {}) {
        const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
        const query = queryString.length > 0 ? `${uri}?${queryString}` : uri
        return await this.axios.$get(query)
        .then(response => {
            return new Response(200, response)
        })
        .catch(err => {
            return new Response(err.response.status, err.response.data)
        })
    }

    async post(uri, params = {}) {
        return await this.axios.$post(uri, params)
            .then(response => {
                return new Response(200, response)
            })
            .catch(err => {
                return new Response(err.response.status, err.response.data)
            })
    }
}
export class Response {
    constructor(status, data) {
        this.status = status
        this.data = data
    }

    isSuccess() {
        return this.status == 200
    }

    isRequestError() {
        return this.status == 400 || this.status == 401
    }

}

export function createRequestClient(axios, cookies, store) {
    return new RequestClient(axios, cookies, store)
}