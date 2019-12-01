const csvtojson = require("csvtojson");

const request = require('request');


csvtojson()
    .fromFile("base_123i.csv")
    .then(csvData => {
        console.log("aaaa")
        csvData.forEach(item => {
            //console.log(item.latitude);
            //console.log(item.longitude);
            var MongoClient = require("mongodb").MongoClient;
            var url = "mongodb://localhost:27017/";

            request('http://www.google.com', function (error, response, body) {
                console.error('error:', error); // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                // console.log('body:', body); // Print the HTML for the Google homepage.
            });

            return;
            var url_api = `http://places.cit.api.here.com/places/v1/discover/around?in=${item.latitude}%2C${item.longitude}%3Br%3D1000&cat=hospital&Accept-Language=en-US%2Cen%3Bq%3D0.9%2Cpt-BR%3Bq%3D0.8%2Cpt%3Bq%3D0.7&app_id=bFDOZ1cahNKVNTGQV00f&app_code=8elG4aRfiDEZ2rjFyxeccA`
            //console.log(url)
            request(url, function (error, response, body) {

                console.log(error)
                if (!error && response.statusCode == 200) {
                    console.log(body)

                }
            })



        }
        )

    });