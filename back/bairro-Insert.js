const request = require('request');

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("loftech");

    dbo.collection("apartament").find()
        .toArray(async (err, result) => {

            let mapResult = result.map(item => {


                var url_api = `http://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox=${item.latitude}%2C${item.longitude}&mode=retrieveAddresses&maxresults=1&gen=9&app_id=bFDOZ1cahNKVNTGQV00f&app_code=8elG4aRfiDEZ2rjFyxeccA`
                //     
                //console.log(url_api)
                return request(url_api, function (error, response, body) {

                    if (!error && response.statusCode == 200) {
                        var jsonObject = JSON.parse(body);
                        //console.log(jsonObject)



                        //console.log(jsonObject.Response.View[0].Result)
                        if (jsonObject.Response.View[0]) {
                            jsonObject.Response.View[0].Result.forEach(async district => {
                                //console.log(objectItem)
                                //necessario dar o update
                                //console.log(bairro.Location.Address.District)
                                let bairro = district.Location.Address.District
                                //  console.log("aaa")
                                await dbo.collection("apartament").updateOne({ "_id": item._id }, { $set: { bairro } })
                            })

                            //dbo.collection("apartament").update("")

                        }

                    }
                })

            })

            await Promise.all(mapResult).then((res) => {
                //console.log("Fim do programa", res)
            }).catch((err) => {
                console.log("Deu erro : ", err)
            })

            //db.close()
            console.log("Fim do programa")
        })
})



