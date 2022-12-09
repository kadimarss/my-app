import * as api from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load({error, params}) {
    //console.log('load')

    return await api.post('List');
}

