const monsterUrl = 'http://localhost:3000/monsters';

let cachedJSON = {};

getFetch()


function getFetch(){
    fetch('http://localhost:3000/monsters/?_limit=50')
    .then(response => response.json())
    .then(json => pageLoad(json))
}


function pageLoad(monstersArr){
    console.log(monstersArr)
    let monstcontain = document.querySelector('#monster-container')
    monstersArr.forEach(monsterObject => {
        let monstName = document.createElement("h2")
        monstName.textContent = monsterObject.name
        monstcontain.append(monstName)
    })



}