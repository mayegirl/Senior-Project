var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "loganmsmith897@gmail.com",
    password: "LittleDeer2013"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});