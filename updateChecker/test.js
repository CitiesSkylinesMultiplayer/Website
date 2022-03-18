const express = require("express")
const app = express()
const port = 3000
const axios = require("axios")
const wait = require("util").promisify(setTimeout)
let ver
let ver2

function fetchUpdates() {
    axios.get( "https://api.github.com/repos/CitiesSkylinesMultiplayer/CSM/actions/artifacts", null, {
        headers: {
            'Accept': "application/vnd.github.v3+json"
        }
    })
    .then(data => ver = data.data.artifacts[0].name)
    axios.get( "https://api.github.com/repos/CitiesSkylinesMultiplayer/CSM/releases", null, {
        headers: {
            'Accept': "application/vnd.github.v3+json"
        }
    })
    .then(data => ver2 = data.data[0].name)
}
fetchUpdates()
app.get('/', (req, res) =>{
    res.send(ver)
})

app.get('/releases', (req, res) => {
    console.log(ver2)
    res.send(ver2)
})

app.listen(port, () => {
    console.log('Stated on port: 3000')
})

setInterval(fetchUpdates, 60*1000*60);