// This is what runs the whole app.

const express = require('express')
const PORT = process.env.PORT || 5000
const path = require('path')

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('view engine', 'ejs')
    .set('views', path.join(__dirname, 'views'))
    .get('/', function (req, res) {res.sendFile(__dirname + '/public/main.html')})
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));

