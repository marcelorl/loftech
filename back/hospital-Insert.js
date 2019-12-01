const request = require('request');

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("loftech");

    dbo.collection("apartament").find()
        .toArray(async (err, result) => {

            let mapResult = result.map(item => {
                var url_api = `http://places.cit.api.here.com/places/v1/discover/around?in=${item.latitude}%2C${item.longitude}%3Br%3D1000&cat=hospital&Accept-Language=en-US%2Cen%3Bq%3D0.9%2Cpt-BR%3Bq%3D0.8%2Cpt%3Bq%3D0.7&app_id=bFDOZ1cahNKVNTGQV00f&app_code=8elG4aRfiDEZ2rjFyxeccA`
                //console.log(url_api)
                return request(url_api, function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        var jsonObject = JSON.parse(body);
                        //console.log(jsonObject)

                        if (jsonObject.results.items) {
                            jsonObject.results.items.forEach(async hospital => {
                                //console.log(objectItem)
                                //necessario dar o update

                                await dbo.collection("apartament").updateOne({ "_id": item._id }, { $set: { hospital } })
                            })

                            //dbo.collection("apartament").update("")

                        }

                    }
                })

            })

            await Promise.all(mapResult)

            //db.close()
            console.log("Fim do programa")
        })
})



