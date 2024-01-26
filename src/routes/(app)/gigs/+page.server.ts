import { getGigs } from '$lib/util/getGigs.js';

export async function load({ params, url }) {
    const category = url.searchParams.get('category');
    if (category) {
        const gigs = await getGigs(category);
        return { gigs, category }
    }
    return { category }
}