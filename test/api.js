var https = require('https');

// const axios = require('axios');

// function reqListener () {
//     console.log(this.responseText);
//   }
  
//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", reqListener);
//   oReq.open("GET", "http://www.example.org/example.txt");
//   oReq.send();
function apiHttpsGet (url) {
let json;

http.get(url,(res) => {
    let body = "";

    res.on("data", (chunk) => {
        body += chunk;
    });

    res.on("end", () => {
        try {
            json = JSON.parse(body);
            // do something with JSON
        } catch (error) {
            console.error(error.message);
        };
    });
    return json

}).on("error", (error) => {
    console.error(error.message);
});

}

console.log(apiHttpsGet('https://www.something.com').key);