/**
 * Created by courtneyphelps on 7/3/17.
 */
//express and body parser
var express = require ("express");
var bodyParser = require ("body-parser");

var app = express();
var port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false}));

//express and handlebars
var exphbs = require ("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine","handlebars");

//mysql

var mysql = require ("mysql");

var connection = mysql.createConnection({
    host    : "localhost",
    user    : "root",
    password: "",
    database: "gameofthrones"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting " + err.stack);
    }
    console.log("connection as id " + connection.threadId);
});

app.listen(port, function () {
   console.log("Listening on PORT " + port);
});

