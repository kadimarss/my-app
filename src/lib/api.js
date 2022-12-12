//const base = 'https://api.m3o.com/v1/user';
//const base = 'https://af68a2a0b0.to.intercept.rest/v1/user';
import {Err} from "$lib/err.js";

const API_URL = import.meta.env.VITE_API_URL;

async function send({method, path, data, token}) {
    const opts = {method, headers: {}};

    if (data) {
        opts.headers['Content-Type'] = 'application/json';
        opts.body = JSON.stringify(data);
    }

    opts.headers['Authorization'] = `Bearer NTY4MTI1MDYtNTQzNy00NTVjLTlmMGUtNjZmMGE2YjI0MDJm`;

    // console.log(`${API_URL}/${path}`)
    // console.log(opts)

    let status
    try {
        return fetch(`${API_URL}/${path}`, opts)
            .then((r) => {
                status = r.status;
                return r.text()
            })
            .then((json) => {
                let body = null
                try {
                    body = JSON.parse(json);
                    if (body?.status === 'error') {
                        console.log(`3.api.js: API response error from ${API_URL}/${path}: ${json}`);
                    }
                } catch (err) {

                    console.log(`2.api.js: API response error from ${API_URL}/${path}: ${json}`);
                }
                return {code: status, body: body ? body : json};
            })
            .catch((err) => {
                console.log(`1.api.js: API response error from ${API_URL}/${path}: ${err}`);
                //await Err.log(err)
                return {code: 390, body: err.message};
            })
    } catch (e) {
        console.log(e)
        return {code: 500, message: e.message}
    }
}

export function get(path, token) {
    return send({method: 'GET', path, token});
}

export function del(path, token) {
    return send({method: 'DELETE', path, token});
}

export function post(path, data, token) {
    return send({method: 'POST', path, data, token});
}

export function put(path, data, token) {
    return send({method: 'PUT', path, data, token});
}
