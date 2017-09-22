var express = require('express')
var app = express()

app.use('/', express.static(__dirname + '/www'));
app.use('/dist', express.static(__dirname + '/dist'));

app.listen(3000, function () {
    console.log('Listening on port 3000!')
});