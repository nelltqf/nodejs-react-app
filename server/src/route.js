const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const datasource = require("./config.json").datasource;

router.get("/:name", (req, res) => {
    MongoClient.connect(datasource.url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("users");
        dbo.collection("customers").findOne({
                name: req.params.name
            },
            function (err, result) {
                if (err) throw err;
                res.json(result);
                db.close();
            });
    });
});

router.post("/", (req, res) => {
    MongoClient.connect(datasource.url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("users");
        dbo.collection("customers").insertOne({
                name: req.body.name,
                age: req.body.age
            },
            function (err, result) {
                if (err) throw err;
                res.json(result);
                db.close();
            });
    });
});

module.exports = router;