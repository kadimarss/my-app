export function post(endpoint, data) {
    console.log('spets test')

    try {
        return fetch('/api/' + endpoint, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(data || {}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((r) => r.json())
            .then((r) => {
                    if ('code' in r && r.code > 399) alert(JSON.stringify(r))
                    return r
                }
            );
    } catch (e) {
        console.log(e)
        return {code: 500, message: e.message}
    }
}
//front-end
