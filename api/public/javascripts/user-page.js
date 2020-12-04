const username = sessionStorage.getItem('username');
document.getElementById('user-name').innerText = username;

const listToStoreAnimation = document.querySelector('.animation-list');

const animationList = getFromDB(`/animation-list/?username=${username}`).then(data => {
    // li
    // -> a href={animationLink}
    //    -> text that is substring of link
    data.map(animationLink => {
        const liNode = document.createElement("li");
        const aNode = document.createElement("a");
        const textNode = document.createTextNode(animationLink.substring(animationLink.lastIndexOf('/'), animationLink.lastIndexOf('.')));
        aNode.href = animationLink;
        aNode.appendChild(textNode);
        liNode.appendChild(aNode);
        listToStoreAnimation.appendChild(liNode);
    });
});

async function getFromDB(url) {
    const res = await fetch(url);
    const json = await res.json();
    const animationsList = json.animationList;

    return animationsList;
}