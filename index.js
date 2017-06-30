var express = require('express')
var app = express()

app.use('/', express.static(__dirname + '/public'))
app.use('/dist', express.static(__dirname + '/dist'))
app.use('/libs', express.static(__dirname + '/libs'))

app.listen(3000, function () {
    console.log('Listening on port 3000!')
});