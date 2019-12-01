var HereMapsAPI = require('here-maps-node').default; // es5
//import HereMapsAPI from 'here-maps-node'; // es6

var config = {
    app_id: 'bFDOZ1cahNKVNTGQV00f',
    app_code: '8elG4aRfiDEZ2rjFyxeccA'
};
var hmAPI = new HereMapsAPI(config);

// geocode API
var geocodeParams = {
    "searchtext": "Brazil"
};

hmAPI.geocode(geocodeParams, function (err, result) {
    console.log(result.Response.View[0].Result[0]);
    //console.log(result)
    //console.log(result.Response.View[0])
});

// matrix routing APIs