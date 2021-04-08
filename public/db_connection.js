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

    var txt = "";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myJson = JSON.parse(this.responseText);
        txt += "<table border='1'>"
        txt += "<tr><th>'Title'</th><th>'City'</th><th>'Estate Style'</th><th>'Square Footage'</th><th>'Bedrooms'</th><th>'Bathrooms'</th><th>'Garage Spaces'</th><th>'Total Parking Space'</th><th>'Washer/Dryer'</th><th>'Fridge/Freezer'</th><th>'Oven/Stove'</th><th>'Study'</th><th>'Attic'</th><th>'Description'</th></tr>";
        myJson.forEach(function (x) {
            txt += "<tr><td>" + x.Title + "</td> <td>" + x.City + "</td> <td>" + x
                                .Estate_Style +"</td> <td>" + x.Square_Footage + "</td> <td>" + x
                                .Bedrooms +"</td> <td>" + x.Bathrooms + "</td> <td>" + x
                                .Garage_Spaces + "</td> <td>" + x.Total_Parking_Spaces + "</td> <td>" + x
                                .Washer_Dryer +"</td> <td>" + x.Fridge_Freezer + "</td> <td>" + x
                                .Oven_Stove + "</td> <td>" + x.Study + "</td> <td>" + x
                                .Attic_Space + "</td> <td>" + x.Description + "</td></tr>";
                        });
                        txt += "</table>"
        document.getElementById("display").innerHTML = this.responseText;
    }
    };
    xhttp.open("GET", data, true);
    xhttp.send();

}