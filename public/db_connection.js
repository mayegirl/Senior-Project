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


function writeHTMLfromJSON(){
    let data = '../private/database.json';

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("display").innerHTML = this.responseText;
    }
    };
    xhttp.open("GET", data, true);
    xhttp.send();

}