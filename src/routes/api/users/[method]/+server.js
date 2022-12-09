import * as api from '$lib/api';

export async function POST({request, params}) {
    const body = await api.post(params.method, await request.json());
    // console.log(JSON.stringify(body))
    return new Response(JSON.stringify(body));
}

