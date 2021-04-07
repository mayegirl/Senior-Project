//opens a connection to my database.

const db = require('mysql')
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'loganmsmith897@gmail.com',
    password: 'LittleDeer2013',
    database: 'propertyDB'
});

conn.connect(function(err) {
    if (err) throw err;
    console.log('Databse is connected successfully!');
});
module.exports = conn;