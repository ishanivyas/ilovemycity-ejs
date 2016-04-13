/**
 * Created by ishani on 4/7/16.
 */

var express = require("express")

var app = express();

var routes=require('./routes/routes.js');

app.set("view engine", "ejs");

app.get('/',routes.home);

app.get('/:city',routes.city);

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8080;

var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});