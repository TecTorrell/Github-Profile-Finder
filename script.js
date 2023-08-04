console.log('hello world');

const GITHUB__URL = 'https://api.github.com/users/TorrellCrafts';
fetch(GITHUB__URL)
.then(response => response.json())
.then(data =>{

    const repoContainer = document.querySelector('.repo');
    repoContainer.innerHTML = data.company;
    console.log(data);
});  
