import {post} from "$lib/utils.js";
import * as api from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    console.log('load')

    const response = await api.post('List');

    console.log(response)
    return response
}

// async function getUsers() {
//     const response = await post('users/List')
//     users = response.users
//     return users
// }