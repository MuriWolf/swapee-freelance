import { getUser } from '$lib/util/getUser.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const userName = params.userName;

    const userSearched = await getUser(userName);

    if (userSearched) {
        return {userSearched};
    }

    error(404, 'Not found');
}