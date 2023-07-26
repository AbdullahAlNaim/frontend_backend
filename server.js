const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'))

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.post('/box.html', () => {
    console.log('got new data')
})

app.listen(port, () => {
    console.log(`listening to port ${port}...`);
})