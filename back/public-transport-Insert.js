const request = require('request');

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("loftech");

    dbo.collection("apartament").find()
        .toArray(async (err, result) => {

            let mapResult = result.map(item => {

                let location = {
                    type: 'Point',
                    coordinates: [
                        item.latitude, item.longitude
                    ]
                }

                await dbo.collection("apartament").updateOne({ "_id": item._id }, { $set: { publicTransport } })


            })

            await Promise.all(mapResult).then((res) => {
                console.log("Fim do programa", res)
            }).catch((err) => {
                console.log("Deu erro : ", err)
            })

            //db.close()
            console.log("Fim do programa")
        })
})



