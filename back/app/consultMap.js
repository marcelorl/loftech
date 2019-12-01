var express = require('express');
var app = express();

app.use(express.json())

var MongoClient = require("mongodb").MongoClient;
const { ObjectId } = require('mongodb'); // or ObjectID 
var url = "mongodb://localhost:27017/";

// respond with "hello world" when a GET request is made to the homepage
app.get('/consultaid/:id', function (req, res) {

    console.log(req.params)

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("loftech");

        dbo.collection("apartament").find({ _id: ObjectId(req.params.id) })
            .toArray(async (err, result) => {
                if (err) throw err
                console.log(result)
                res.status(200).send(result)

            })
    })

});

app.get("/hello", (req, res) => {
    res.send("HELLO")
})

app.get("/consultarGeral", (req, res) => {

    const body = req.body

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("loftech");

        dbo.collection("apartament").find({ price: { $lt: body.price } }).limit(50)
            .toArray(async (err, result) => {
                if (err) throw err
                console.log(result)
                res.status(200).send(result)

            })
    })

});

function adicionarValorRandom(req, res) {
    const body = req.body

    //body.valor
    //body.public
    //body.hospital
    const high = 5000000
    const low = 600000

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("loftech");

        dbo.collection("apartament").find()
            .toArray(async (err, result) => {
                if (err) throw err


                console.log("bbb")
                let mapResult = result.map(async item => {
                    //console.log(url_api)
                    let price = Math.random() * (high - low) + low
                    await dbo.collection("apartament").updateOne({ "_id": item._id }, { $set: { price } })
                })

                //dbo.collection("apartament").update("")
                await Promise.all(mapResult)

                //db.close()
                console.log("Fim do programa")
                res.send("OK")

            })

    })

};


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});