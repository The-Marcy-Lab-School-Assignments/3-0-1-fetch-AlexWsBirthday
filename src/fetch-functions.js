const userUrl = 'https://jsonplaceholder.typicode.com/users'

export const checkResponseStatus = () => {
    //defining the variable that holds the fetch promise, chaining the then
    const checkStatus = fetch(userUrl).then((response) => {
        //returning the data from the response promise in an object using object keys 
        return { "ok": response.ok, "status": response.status, "url": response.url };

    });
    //returning the promise itself and the data it has with it
    return checkStatus
};

export const getUsers = () => {
    const userDataFetch = fetch(userUrl).then((response) => {

        return {
            id: response.
        }

    })

    return userDataFetch
};

export const getUserPosts = () => {
};

export const createNewUser = () => {
}
