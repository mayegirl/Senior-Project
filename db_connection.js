const json2html = require('node-json2html')
const fs = require('fs');
const jsonFile = require('private/database.json');

let template_table_header = {
    "<>" : "tr", "html": [
    {"<>": "th", "html": "Title"},
    {"<>": "th", "html": "City ID"},
    {"<>": "th", "html": "Estate Style"},
    {"<>": "th", "html": "Square Footage"},
    {"<>": "th", "html": "Bedrooms"},
    {"<>": "th", "html": "Bathrooms"},
    {"<>": "th", "html": "Garages Spaces"},
    {"<>": "th", "html": "Total Parking Spaces"},
    {"<>": "th", "html": "Washer/Dryer"},
    {"<>": "th", "html": "Fridge/Freezer"},
    {"<>": "th", "html": "Oven/Stove"},
    {"<>": "th", "html": "Study"},
    {"<>": "th", "html": "Attic Space"},
    {"<>": "th", "html": "Description"}
    ]
}

let template_table_body = {
    "<>" : "tr", "html": [
    {"<>": "td", "html": "${Title}"},
    {"<>": "td", "html": "${City}"},
    {"<>": "td", "html": "${Estate Style}"},
    {"<>": "td", "html": "${Square Footage}"},
    {"<>": "td", "html": "${Balconies}"},
    {"<>": "td", "html": "${Balconie Space}"},
    {"<>": "td", "html": "${Bedrooms}"},
    {"<>": "td", "html": "${Bathrooms}"},
    {"<>": "td", "html": "${Garage Spaces}"},
    {"<>": "td", "html": "${Total Parking Spaces}"},
    {"<>": "td", "html": "${Washer/Dryer}"},
    {"<>": "td", "html": "${Fridge/Freezer}"},
    {"<>": "td", "html": "${Oven/Stove}"},
    {"<>": "td", "html": "${Study}"},
    {"<>": "th", "html": "${Attic Space}"},
    {"<>": "td", "html": "${Description}"}
    ]
}

function writeHTMLfromJSON(jsonFile){
    let data = jsonFile;
    let table_header = json2html.transform(data[0], template_table_header);
    let table_body = json2html.transform(data, template_table_body);

    let header = '<!DOCTYPE html' + 'html lang="en">\n' + '<head><title>Property Database</title></head>'
    let body = '<h1>Available Houses</h1><br><table id="my_table">\n<thead>' + table_header + '\\n</thead>\\n<tbody>\\n' + table_body + '\\n</tbody>\\n</table>'
    body = '<body>' + body + '</body>'

    let html = header + body + '</html>';

    fs.readFile('private\\database.json', (err, data) => {
    if (err) throw err;
    let database = JSON.parse(data);
    console.log(database);
    });

    console.log('This is after the read call');
    document.getElementById('display').innerHTML = html;
}