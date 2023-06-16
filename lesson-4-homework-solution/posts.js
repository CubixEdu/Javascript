export const initPosts = () => {
    document.getElementById('send-btn').addEventListener('click', () => sendPost());

    displayPosts();
    displayPostDetails();
}

const sendPost = async () => {
    const id = document.getElementById('new-post-id').value;
    const title = document.getElementById('new-post-title').value;
    const body = document.getElementById('new-post-body').value;
    const post = {
        title,
        body,
        userId: 10
    };

    if(id) {
        post.id = id;
    }

    const newPost = await createOrUpdatePost(post);
    displayPost(newPost);
}

const displayPost = (post) => {
    const titleElement = document.getElementById('post-title');
    const bodyElement = document.getElementById('post-body');

    titleElement.innerText = post.title;
    bodyElement.innerText = post.body;
}

const displayPosts = async () => {
    const postListElement = document.getElementById('posts');
    postListElement.innerHTML = '';

    const posts = await getTopPostTitles();

    posts.forEach(post => {
        postListElement.innerHTML += `
        <div>
            <span>${post.title}</span>
            <button id="delete-${post.id}">Delete</button>
        </div>`        
    })

    posts.forEach(post => {
        document.getElementById(`delete-${post.id}`).addEventListener('click', async e => {
            const parentElement = e.target.parentElement;
            
            await deletePost(post.id);
            parentElement.remove();
        })
    })
}

const displayPostDetails = async () => {
    const postDetailsElement = document.getElementById('post-details');
    postDetailsElement.innerHTML = '';

    const posts = await Promise.all([
        getPostById(1),
        getPostById(2),
        getPostById(3),
        getPostById(4),
        getPostById(5)
    ])

    posts.forEach(post => {
        postDetailsElement.innerHTML += `
            <p>${post.title} - ${post.body} (${post.id})</p>
        `
    })
}

const createOrUpdatePost = async (post) => {
    const url = post.id !== undefined
    ? `https://jsonplaceholder.typicode.com/posts/${post.id}` 
    : `https://jsonplaceholder.typicode.com/posts`

    const response = await fetch(url, {
        method: post.id !== undefined ? 'PATCH' : 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json'
        }
    });

    return await response.json();
}

const getTopPostTitles = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await response.json();

    return posts.filter(post => post.id <= 10);
}

const deletePost = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
    {method: 'DELETE'});

    return await response.json();
}

const getPostById = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    
    return await response.json();
}

const myFetch = (url, method = 'GET') => {
    const request = new XMLHttpRequest();
    
    return new Promise((resolve, reject) => {
        request.addEventListener('load', load => {
            resolve({status: request.status, response: request.response})
        });
    
        request.addEventListener('error', e => reject(e));
    
        request.open(method, url);
        request.send();
    })
}

myFetch(`https://jsonplaceholder.typicode.com/posts/1`)
.then(({status, response}) => console.log(`Status: ${status}`, JSON.parse(response)));