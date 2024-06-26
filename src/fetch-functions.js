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

    // You don't need to create a whole variable just to fetch data from a link
    // const userDataFetch = fetch(userUrl)

    return fetch(userUrl)

        //bro i was not translating the response oh my god?? You have to translate it from 
        //JSON so the program/app can access the data 
        .then(response => {
            //You always have to check if the response status is okay, meaning that it was fulfilled successfully
            if (!response.ok) {
                //If the response status isn't okay, catch it immediately and throw an error so it can be handled immediately. 
                throw new Error(`Error status: ${response.status}`)
            }
            return response.json()
        })
        //redefining the response, now translated, as data
        .then(data => {
            return data

            //looking at the test cases, I thought I had to format the data a certain way to pass.
            //Since I thought it'd be working with the url that was given at the top of the page, and not a mock with a test array.
            //I didn't know that the test would pass in an array and expect it to be returned as it was, meaning I went throught the trouble
            // of trying to format the data that passed through. The code is below. 

            //--------------------------------------------------------------------------------------------------------------------------------------
            // //setting the empty array for users to be pushed into 
            // let users = [];
            // //iterating through the data and collecting the necessary user data to add to the array

            // // for (i = 0; i < data.length; i++) {
            // //     let userID = data[i].id;
            // //     let userName = data[i].name;

            // //     let user = { 'id': userID, 'username': userName }

            // //     users.push(user)

            // // }

            // //Since the data is an array of objects, we are taking each user object and getting the data we need from it (their id and name) 
            // data.forEach((user) => {
            //     //getting the user id by the object key 'id' from the data
            //     let userID = user.id;
            //     //getting the users name by the object key 'name'
            //     let userName = user.name;

            //     //putting the user information into an object of its own
            //     let userInfo = { 'id': userID, 'username': userName }

            //     //pushing the user information object we just made above into the users array
            //     users.push(userInfo)

        })

        //returning the user object array to be further chained by future promises 
        // console.log(users)
        // return users
        //--------------------------------------------------------------------------------------------------------------------------------------
        .catch((err) => {
            console.error('Error:', err)
            throw err;
        });



};

console.log(getUsers());


export const getUserPosts = (userId, maxNumPosts = 3) => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;

    const userPosts = fetch(url).then(response => {
        //You always have to check if the response status is okay, meaning that it was fulfilled successfully
        if (!response.ok) {
            //If the response status isn't okay, catch it immediately and throw an error so it can be handled immediately. 
            throw new Error(`Error status:${response.status}`)
        }
        return response.json()
    })
        //redefining the response, now translated, as data
        .then(data => {
            //taking the data from the user and 
            data.slice(0, maxNumPosts)
        })
        .catch((err) => {
            console.error('Error:', err)
            throw err;
        });

    //forgot I had to return the promise 
    return userPosts

};

export const createNewUser = (newUserData) => {

    //fetching the user url
    return fetch(url, {
        //feeding the fetch function more information about the kind of promise we're making with the data from the url
        //This is called an options object, with specifications to customize the fetch request we're sending
        //method is post, meaning we're adding to the database
        method: 'POST',
        //I don't know why headers are here or what the information below is?
        //Apparently the headers specify the content type, telling the server the content is json
        headers: {
            'Content-Type': 'application/json'
        },
        //I also don't really know why we're doing this
        body: JSON.stringify(newUserData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`)

            }
            return response.json();
        })
        .then(data => {



        }).catch((err) => {
            console.error('Error:', err)
            throw err;
        });

    return newUser
}
