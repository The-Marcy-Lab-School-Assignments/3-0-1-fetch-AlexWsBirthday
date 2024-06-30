export const setupPageBasics = (parentEl) => {
  parentEl.innerHTML = `
      <h1>Intro To Fetch!</h1>
      <div id='status'></div>
      <div id='users'>
        <h2>Users</h2>
        <ul id='users-list'></ul>
      </div>
      <div id='posts'>
        <h2>Posts</h2>
        <ul id='posts-list'></ul>
      </div>
      <form id='new-user-form' aria-labelledby='new-user-heading'>
        <h2 id='new-user-heading'>Create A New Blog User!</h2>
        <label for='username'>Username:</label>
        <input type='text' id='username' name='username' />
        <label for='email'>Email:</label>
        <input type='email' id='email' name='email' />
        <button>Submit</button>
      </form>
      <div id='new-user'></div>
    `;

  const statusDiv = parentEl.querySelector('#status');
  const usersUl = parentEl.querySelector('#users-list');
  const postsUl = parentEl.querySelector('#posts-list');
  const newUserForm = parentEl.querySelector('#new-user-form');
  const newUserDiv = parentEl.querySelector('#new-user');

  return { statusDiv, usersUl, postsUl, newUserForm, newUserDiv };
};

//-----------------------------------------------------------------------------------------------------------------------------------------------------

export const renderStatus = (statusDiv, statusInfoObj) => {
  //creating the new h2 element
  const statHead = document.createElement("h2");
  //setting its id via setAttribute
  statHead.setAttribute("id", 'status-heading');
  //setting the text content based off a key-value pair with information about the url (what the url is)
  statHead.textContent = `Info on - ${statusInfoObj.url}`;
  //adding it to the parent statusDiv
  statusDiv.appendChild(statHead);

  //creating the second child element, the paragraph which gives us the status code and whether the promise is okay/failed
  const statP = document.createElement("p");
  statP.setAttribute("id", "status-code")

  //checking if the status ok is true or false. If true, return OK. if false, return FAIL
  statP.textContent = `Status code: ${statusInfoObj.status}, ${!statusInfoObj.ok ? "FAIL!" : "OK!"}`

  statusDiv.appendChild(statP)

}

//-----------------------------------------------------------------------------------------------------------------------------------------------------
export const renderUsers = (usersUl, users) => {

  //forgot to set innerHTML of the usersUl
  usersUl.innerHTML = '';

  //taking each user in the array and making a li element for them
  users.forEach((user) => {
    const liTime = document.createElement("li");
    liTime.setAttribute("class", "user-card");

    usersUl.appendChild(liTime);

    const buttonTime = document.createElement("button");
    buttonTime.setAttribute("data", "data-user-id");
    buttonTime.setAttribute("data-user-id", user.id);
    buttonTime.textContent = `Load ${user.username}'s posts`

    liTime.appendChild(buttonTime)

  }
  )
};

//-----------------------------------------------------------------------------------------------------------------------------------------------------

export const renderPosts = (postsUl, posts) => {

  // setting the inside of the ul
  postsUl.innerHTML = '';

  //going through the post array 
  posts.forEach((post) => {
    // creating the list element
    const li = document.createElement('li');

    // creating the h2 element and appending it to the li element as a child
    const postHeading = document.createElement('h2');
    postHeading.textContent = post.title;

    li.appendChild(postHeading);

    // creating the paragraph element 
    const para = document.createElement('p')
    para.textContent = post.body

    li.appendChild(para)

    //appending the li element to the post ul
    postsUl.appendChild(li);
  })


}

//-----------------------------------------------------------------------------------------------------------------------------------------------------
export const renderNewUser = (newUserDiv, newUserInfo) => {
  //clearing the inside of the html element newuserdiv
  newUserDiv.innerHTML = '';

  const user = newUserInfo;


  const heading = document.createElement('h2');
  heading.textContent = user.username;

  const userPara = document.createElement('p');
  userPara.textContent = user.email;

  newUserDiv.appendChild(heading);
  newUserDiv.appendChild(userPara);




}