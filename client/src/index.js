import './main.css'
console.clear()

fetch('/api')
    .then(x => x.json())
    .then(jsonData => console.log(jsonData))

