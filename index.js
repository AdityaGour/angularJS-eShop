var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

var server = express();
server.use(express.static("public"))
server.use(bodyParser.json())

var url="mongodb://localhost:27017";
var db;

MongoClient.connect(url,function(err,client){
    db=client.db("e-shop")
    console.log(err)

})




server.listen(8000,function(){
    console.log("server started")
})