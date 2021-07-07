const monsterUrl = 'http://localhost:3000/monsters';

funtion getFetch(){
    fetch('http://localhost:3000/monsters')
    .then(response => response.json())
    .then(json => console.log(json))
    pageload()
}


funtion pageLoad(){


}