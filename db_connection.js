const fs = require('fs');

fs.readFile('private\\database.json', (err, data) => {
    if (err) throw err;
    let database = JSON.parse(data);
    console.log(database);
});

console.log('This is after the read call');