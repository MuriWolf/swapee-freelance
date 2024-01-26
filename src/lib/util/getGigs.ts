import { PUBLIC_API_URL } from "$env/static/public";

export async function getGigs(categorySearched?: string) {
    const response = await fetch(`${PUBLIC_API_URL}/gigs`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    let returnData = data;

    function includesCategorySearched(gig: any) {
        if (gig.category.slug == categorySearched) {
            return gig;
        }
    }

    if (categorySearched) {
        try {
            returnData = data.filter(includesCategorySearched)
        } catch (error) {
            throw new Error('category not found');
        }
    }
    return returnData;
}