function writeHTMLfromJSON(){
    var txt = "";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myJson = JSON.parse(this.responseText);
        txt += "<table border='1'>"
        txt += "<tr><th>Title</th><th>City</th><th>Estate Style</th><th>Square Footage</th><th>Bedrooms</th><th>Bathrooms</th><th>Garage Spaces</th><th>Total Parking Space</th><th>Washer/Dryer</th><th>Fridge/Freezer</th><th>Oven/Stove</th><th>Study</th><th>Attic</th><th>Description</th></tr>";
        for (i in myJson.properties) {
            txt += "<tr><td>" + myJson.properties[i].Title + "</td> <td>" + myJson.properties[i].City + "</td> <td>" + myJson
                                .properties[i].Estate_Style +"</td> <td>" + myJson.properties[i].Square_Footage + "</td> <td>" + myJson
                                .properties[i].Bedrooms +"</td> <td>" + myJson.properties[i].Bathrooms + "</td> <td>" + myJson
                                .properties[i].Garage_Spaces + "</td> <td>" + myJson.properties[i].Total_Parking_Spaces + "</td> <td>" + myJson
                                .properties[i].Washer_Dryer +"</td> <td>" + myJson.properties[i].Fridge_Freezer + "</td> <td>" + myJson
                                .properties[i].Oven_Stove + "</td> <td>" + myJson.properties[i].Study + "</td> <td>" + myJson
                                .properties[i].Attic_Space + "</td> <td>" + myJson.properties[i].Description + "</td></tr>";
                        };
                        txt += "</table>"
        document.getElementById("display").innerHTML = txt;
    }
    };
    xhttp.open("GET", '../private/database.json', true);
    xhttp.send();

}