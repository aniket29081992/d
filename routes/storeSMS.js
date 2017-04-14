var mongo = require('mongodb'),
    expressValidator = require('express-validator');
var MongoClient=mongo.MongoClient



var storeSMS = {

    storeData: function (req, res) {
        var Server = mongo.Server,
            Db = mongo.Db,
            BSON = mongo.BSONPure;


        var host='mongodb://35.154.112.234:27017/test'
        var port='27017'
        var dbname='test'

        var server = new Server(host, port, {auto_reconnect: true});
        db = new Db(dbname, server);
        MongoClient.connect(host,function (err, db) {

            if (!err) {


                console.log("Connected to 'signup' database");
                db.collection('smsData', {strict: true}, function (err, collection) {
                    if (err) {

                        console.log("The 'wines' collection doesn't exist. Creating it with sample data...");

                    }
                    else {
                        // console.log(req.query.url);
                        // req.assert('url', 'Name is required').notEmpty();
                        // var errors = req.validationErrors();
                        var insertObject = req.body.smsArray;
                        console.log(insertObject);
                        collection.insertMany(insertObject, function (err3, docs3) {
console.log(err3);
                        });
                        var name = collection.findOne({
                          'body' : 'aniket'
                        }, function (err, res1) {res.send(true)});

                    }

                });
            }
            else
                console.log(err)
        })
    }
    ,
    loginRequest: function (req, res) {
        console.log("P");
        res.sendFile('r.html', { root: __dirname });


    }
}


module.exports = storeSMS;