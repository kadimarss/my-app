import * as api from '$lib/api';


let usersCache = [];

/** @type {import('./$types').PageServerLoad} */
export async function load({error, params}) {
    // console.log('load')
    const response = await api.post('List');
    // console.log(response)

    //if response is bad return response from usersCache
    if (response.code !== 200) {
        // console.log('response code is not 200')
        // console.log(response)
        return usersCache;
    }
    //cache response to usersCache
    usersCache = response;
    console.log('usersCache', usersCache)
    return usersCache
//return {id: 1, name: 'test'};


}

