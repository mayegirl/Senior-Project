var url = "http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=<" + zwsid + ">&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA";
var zwsid = "X1-ZWz1i9miug76kr_1mzvh"
var mysql = require('mysql');


var request = new XMLHttpRequest()
request.open('GET', url, true)

request.onload = function () {
  // Begin accessing JSON data here
}

// Send request
request.send()