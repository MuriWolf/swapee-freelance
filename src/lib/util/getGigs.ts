export async function getGigs(categorySearched?: string) {
    const localUrl = 'http://localhost:5173/api/gigs';
    const response = await fetch(localUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    let returnData = data;

    function includesCategorySearched(gig: any) {
        if (gig.category.urlName == categorySearched) {
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