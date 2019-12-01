var express = require('express');
var app = express();
var cors = require('cors')
app.use(express.json())
app.use(cors())
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
        //dbo.collection("apartament").find({ price: { $lt: body.price } }, { bairro: body.bairro }


        dbo.collection("apartament").find({ price: { $lt: body.price } }, { bairro: body.bairro }

        ).limit(50)
            .toArray(async (err, result) => {
                if (err) throw err
                //console.log(result)
                res.status(200).send(result)

            })
    })

});

app.get('/rota', (req, res) => {

    const body = req.body

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("loftech");
        //dbo.collection("apartament").find({ price: { $lt: body.price } }, { bairro: body.bairro }

        dbo.collection("apartament").find(
            {
                location:
                {
                    $near:
                    {
                        $geometry: {
                            type: "Point",
                            coordinates: [-84.27326978424058, 30.443902444762696]
                        },
                        $maxDistance: 1
                    }
                }
            }
        )
            .limit(50)
            .toArray(async (err, result) => {
                if (err) throw err
                //console.log(result)
                res.status(200).send(result)

            })
    })

})


app.get("/consultarbairro", (req, res) => {

    'https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox=-23.5851969%2C-46.6735148&mode=retrieveAddresses&maxresults=1&gen=9&app_id=devportal-demo-20180625&app_code=9v2BkviRwi9Ot26kp2IysQ'

})

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


app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});