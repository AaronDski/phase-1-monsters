fetch('http://localhost:3000/monsters')
.then(response => response.json())
.then(json => console.log(json))

