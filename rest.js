


    const outputDiv = document.getElementById('output');

    //function to display output on page
    function displayOutput(data) {
        outputDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    }


//get all posts
function getAllPosts() {
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => {
    console.log('Received response', response);
    return response.json();
  })
  .then((json) => {
    console.log('Response JSON:', json);
    renderPost(json);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function renderPost(post) {
    outputDiv.innerHTML = JSON.stringify(post);
}


//get post with id of 10
function getPostByID() {
fetch('https://jsonplaceholder.typicode.com/posts/10')
.then((response) => {
    console.log('Received response', response);
    return response.json();
  })
  .then((json) => {
    console.log('Response JSON:', json);
    renderPost(json);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function renderPost(post) {
    outputDiv.innerHTML = JSON.stringify(post);
}


//create a new post & log the id generated by the server
function createPost() {
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => {
    console.log('Received response', response);
    return response.json();
  })
  .then((json) => {
    console.log('Response JSON:', json);
    renderPost(json);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function renderPost(post) {
    outputDiv.innerHTML = JSON.stringify(post);
}



//Replace the post with ID of 12 and render response JSON

function replacePost() {
console.log('Starting fectch operation');
fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PUT',
    body: JSON.stringify({
      id: 12,
      title: 'foo',
      body: 'bar',
      userId: 101,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => {
    console.log('Received response', response);
    return response.json();
  })
  .then((json) => {
    console.log('Response JSON:', json);
    renderPost(json);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function renderPost(post) {
    outputDiv.innerHTML = JSON.stringify(post);
}


//Update the title of post with id of 12 & render response JSON
function updatePost() {
fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'foo',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => {
    console.log('Received response', response);
    return response.json();
  })
  .then((json) => {
    console.log('Response JSON:', json);
    renderPost(json);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function renderPost(post) {
    outputDiv.innerHTML = JSON.stringify(post);
}




//Delete the post with id of 12 & render a success message
function deletePost() {
fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'DELETE',
    body: JSON.stringify({
        title: 'foo',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => {
      console.log('Received response', response);
      return response.json();
    })
    .then((json) => {
      console.log('Response JSON:', json);
      renderPost("Item successfully deleted!");
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  

function renderPost(post) {
    outputDiv.innerHTML = JSON.stringify(post);
}


//event listeners for buttons
document.getElementById('getAllPostsBtn').addEventListener('click', getAllPosts);
document.getElementById('getPostByIDBtn').addEventListener('click', getPostByID);
document.getElementById('createPostBtn').addEventListener('click', createPost);
document.getElementById('replacePostBtn').addEventListener('click', replacePost);
document.getElementById('updatePostBtn').addEventListener('click', updatePost);
document.getElementById('deletePostBtn').addEventListener('click', deletePost);
