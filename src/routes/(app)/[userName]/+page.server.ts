import { getUser } from '$lib/util/getUser.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const userName = params.userName;

    const data = await getUser(userName);

    if (data.userSearched !== null) {
        return data;
    } else {
        error(404, 'Not found');
    }

}