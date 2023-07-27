const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
//import result from './app.js'

app.use(express.static('public'))
app.use(express.static('scripts'))
// app.use(express.bodyParser());
app.use('/', express.static(path.join(__dirname, '/index.html')))

async function grab(url = '') {
    fetch(url).then(data => {
        return data.json();
    })
        .then(post => {
            console.log(post.title);
        })
}

app.post('/sending', (req, res) => {
    let got = res
    console.log(got);
    console.log('got the data on server');
})

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})