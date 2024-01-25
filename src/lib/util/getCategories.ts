export async function getCategories(categorySearched?: string) {
    const localUrl = 'http://localhost:5173/api/categories';
    const response = await fetch(localUrl, {
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