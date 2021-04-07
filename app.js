// This is what runs the whole app.

const express = require('express')
const PORT = process.env.PORT || 3306
const path = require('path')
//var usersRouter = require('routes/users.js');

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('view engine', 'ejs')
    .set('views', path.join(__dirname, 'views'))
    .get('/', function (req, res) {res.sendFile(__dirname + '/public/main.html')})
    .get('/user-list', function (req, res) {res.render(usersRouter)})
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));

