import { getCategories } from "$lib/util/getCategories";

export async function load() {
    const categories = await getCategories('Social Media')
    return {
        categories: categories
    };
}