var express = require('express');
var app = express();

app.use(express.json())

var MongoClient = require("mongodb").MongoClient;
const { ObjectId } = require('mongodb'); // or ObjectID 
var url = "mongodb://localhost:27017/";

// respond with "hello world" when a GET request is made to the homepage
app.get('/consultaPorID', function (req, res) {
    const body = req.body
    console.log(body)
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("loftech");

        dbo.collection("apartament").find({ _id: ObjectId(body.id) })
            .toArray(async (err, result) => {
                if (err) throw err
                console.log(result)
                res.status(200).send(result)

            })
    })

});

app.get('/consultaGeral', function (req, res) {
    const body = req.body
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});