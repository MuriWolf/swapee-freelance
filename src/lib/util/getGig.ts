import { PUBLIC_API_URL } from "$env/static/public";

export async function getGig(slugSearched: string) {
    const response = await fetch(PUBLIC_API_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    let gigSearched = undefined;
    try {
        for (let i = 0; i < data.length; i++) {
            const gig = data[i];
            if (gig.slug == slugSearched) {
                gigSearched = data[i];
                break;
            }
        }
    } catch (error) {
        throw new Error('gig not found');
    }
    return gigSearched;
}