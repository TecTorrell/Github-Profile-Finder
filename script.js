const SEARCH__CONTAINER = document.querySelector('.search__box');
const SEARCH__BTN = document.querySelector('.search');
const USERNAME = document.querySelector('.username');
const NAME = document.querySelector('.name');
const DATE__JOINED = document.querySelector('.date__joined');
const BIO = document.querySelector('.user__bio');
const REPO = document.querySelector('.repo__no');
const FOLLOWERS = document.querySelector('.followers__no');
const FOLLOWING = document.querySelector('.following__no');

function gitHubUserDataFetch(username) {
    fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        USERNAME.innerHTML = data.login;
        NAME.innerHTML = data.name;
        DATE__JOINED.innerHTML = data.created_at;
        BIO.innerHTML = data.bio;
        REPO.innerHTML = data.public_repos;
        FOLLOWERS.innerHTML = data.followers;
        FOLLOWING.innerHTML = data.following;
    });
};

SEARCH__BTN.addEventListener('click', ()=>{
    let searchField = document.querySelector('input').value;

    if (searchField === '') {
        console.log('empty');
        const SEARCH__BOX = document.querySelector('.search__box')
        SEARCH__BOX.classList.add('error__animation');
    } else {
        gitHubUserDataFetch(`${searchField}`);
    }
});