const monsterUrl = 'http://localhost:3000/monsters';

let cachedJSON = {};

getFetch()


function getFetch(){
    fetch('http://localhost:3000/monsters/?_limit50')
    .then(response => response.json())
    .then(json => pageLoad(json))
}


function pageLoad(nameInfo){
    console.log(nameInfo)
    document.querySelector("#monster-container").textContent = nameInfo.Object.keys()



}