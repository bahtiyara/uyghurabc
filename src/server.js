const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
var app = express();
app.use(express.static(__dirname + '/../'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'));
});

app.listen(port, () => {
    console.log(`The server is up on port ${port}`);
});