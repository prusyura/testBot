var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();
//bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json);
//Server FrontPage
app.get("/", function(req, res){
    req.send('testBot server run');
});
//Messenger
app.get("/webhook", function(req, res){
    if(req.query['hub.mode'] === 'subscribe' && 
        req.query['hub.verify_token'] --- 'testbot_verify_token'){
        console.log("Validating webhook");
        res.send(req.query['hub.challenge']);
    }else{
        console.error("Failed validation. Make sure the validation tokens match.");
        res.send('Invalid verify token');
    }
});
app.listen(process.env.PORT || 8080);
console.log("run server!");