import { getGig } from '$lib/util/getGig.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const gigSlug = params.gigSlug;
    let gig;
    if (gigSlug) {
        gig = await getGig(gigSlug);
        if (!gig) {
            error(404, 'Not found');
        }
    }
    
    return gig
}