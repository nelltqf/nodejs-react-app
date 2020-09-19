const MongoClient = require('mongodb').MongoClient;
const datasource = require("./config.json").datasource;

MongoClient.connect(datasource.url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("mydb");
    dbo.createCollection("customers", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});