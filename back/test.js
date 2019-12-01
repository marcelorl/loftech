const csvtojson = require("csvtojson");

csvtojson()
    .fromFile("base_123i.csv")
    .then(csvData => {
        var MongoClient = require("mongodb").MongoClient;
        var url = "mongodb://localhost:27017/";

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("loftech");

            dbo.collection("apartament").insertMany(csvData, function (err, res) {
                if (err) throw err;
                console.log("Number of documents inserted: " + res.insertedCount);
                db.close();
            });

        });
    });