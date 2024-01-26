import { PUBLIC_API_URL } from "$env/static/public";

export async function getCategories(categorySearched?: string) {
    const response = await fetch(PUBLIC_API_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    let returnData;

    if (categorySearched) {
        try {
            data.forEach((category: any) => {
                if (category.title == categorySearched) {
                    returnData = category;
                }
            });
        } catch (error) {
            console.error("category not found");
            return error;
        }
    }
    return data;
}