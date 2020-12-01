const username = sessionStorage.getItem('username');
document.getElementById('user-name').innerText = username;

const listToStoreAnimation = document.querySelector('.animation-list');

// async function getFromDB(url) {
//     const res = await fetch(url);
//     const json = await res.json();
//     const animationsList = json;

//     return animationsList;
// };

// snippets.then(data => setNewSnippets(data));

fetch(`/animation-list/?username=${username}`)
    .then(res => res.json())
    .then(data => console.log("data: ", data))