//const base = 'https://api.m3o.com/v1/user';
const base = 'https://af68a2a0b0.to.intercept.rest/v1/user';


async function send({method, path, data, token}) {
    const opts = {method, headers: {}};

    if (data) {
        opts.headers['Content-Type'] = 'application/json';
        opts.body = JSON.stringify(data);
    }


        opts.headers['Authorization'] = `Bearer NTA2N2MyZDUtOWQ4YS00ZGNkLWEyNjktNjkxYmY0ZTg1YjRi`;

    console.log(`${base}/${path}`)
    console.log(opts)

    return fetch(`${base}/${path}`, opts)
        .then((r) => r.text())
        .then((json) => {
            try {
                var resParsed = JSON.parse(json);

                if (resParsed?.status === 'error') {
                    console.log(`API response error from ${base}/${path}: ${json}`);
                }

                return resParsed;
            } catch (err) {
                return json;
            }
        });
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