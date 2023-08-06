const SEARCH__CONTAINER = document.querySelector('.search__box');
const SEARCH__BTN = document.querySelector('.search');
const USERNAME = document.querySelector('.username');
const NAME = document.querySelector('.name');
const DATE__JOINED = document.querySelector('.date__joined');
const BIO = document.querySelector('.user__bio');
const REPO = document.querySelector('.repo__no');
const FOLLOWERS = document.querySelector('.followers__no');
const FOLLOWING = document.querySelector('.following__no');
const GITHUB__USER__IMG = document.querySelector('.user__img');
const SEARCH__BOX = document.querySelector('.search__box');


function gitHubUserDataFetch(username) {
    fetch(`https://api.github.com/users/${username}`)
    .then(res => {
        if (res.status === 404) {
            console.error('Username not found');
        } else {
            return res.json();
        };
    })
    .then(data =>{
        if (data.bio === null) {
            const DATA__LENGTH = data.created_at.slice(0, -10);
            USERNAME.innerHTML = data.login;
            NAME.innerHTML = data.name;
            DATE__JOINED.innerHTML = DATA__LENGTH;
            BIO.innerHTML = 'Bio not available';
            REPO.innerHTML = data.public_repos;
            FOLLOWERS.innerHTML = data.followers;
            FOLLOWING.innerHTML = data.following;
            GITHUB__USER__IMG.src = data.avatar_url;
        } else {
            const DATA__LENGTH = data.created_at.slice(0, -10);
            USERNAME.innerHTML = data.login;
            NAME.innerHTML = data.name;
            DATE__JOINED.innerHTML = DATA__LENGTH;
            BIO.innerHTML = data.bio;
            REPO.innerHTML = data.public_repos;
            FOLLOWERS.innerHTML = data.followers;
            FOLLOWING.innerHTML = data.following;
            GITHUB__USER__IMG.src = data.avatar_url;
        }
    })
    .catch(error =>{
        alert('An error occurred while trying to fetch the URL.');
    });
};


function fetchAction() {
    let searchField = document.querySelector('input').value;

    if (searchField === '') {
        SEARCH__BOX.classList.add('error__animation');
        setTimeout(()=>{
            SEARCH__BOX.classList.remove('error__animation');
        }, 500);

        SEARCH__BOX.style.border = '1px solid red';
        setTimeout(()=>{
            SEARCH__BOX.style.border = 'none';
        }, 1000);
        
    }else {
        gitHubUserDataFetch(`${searchField}`);
    };
};



SEARCH__BTN.addEventListener('click', ()=>{
    fetchAction();
});

document.addEventListener('keydown', function(e){
    if (e.key === 'Enter') {
        fetchAction();
    }
});