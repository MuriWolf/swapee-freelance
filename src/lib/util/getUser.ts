export async function getUser(userNameSearched?: string) {
    const localUrl = 'http://localhost:5173/api/users';
    const response = await fetch(localUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    let returnData = null;

    function includesUserName(user: any) {
        if (user.username == userNameSearched) {
            return user;
        }
    }

    if (userNameSearched) {
        try {
            returnData = data.filter(includesUserName)
        } catch (error) {
            throw new Error('user not found');
        }
    }
    return {returnData};
}