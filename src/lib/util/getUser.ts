import { PUBLIC_API_URL } from "$env/static/public";

export async function getUser(userNameSearched?: string) {
    const response = await fetch(PUBLIC_API_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    let userSearched = null;

    if (userNameSearched) {
        try {
            for (let i = 0; i < data.length; i++) {
                const user = data[i];
                if (user.username == userNameSearched) {
                    userSearched = user;
                    break;
                }
            }
        } catch (error) {
            throw new Error('user not found');
        }
    }
    return { userSearched };
}