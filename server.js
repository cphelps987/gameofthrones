/**
 * Created by courtneyphelps on 7/3/17.
 */
//express and body parser
const express = require ("express");
const bodyParser = require ("body-parser");
const exphbs = require ("express-handlebars");


const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false}));

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine","handlebars");

require('./controllers/controllers.js')(app);
//require('./model/model');


app.listen(port, function () {
   console.log("Listening on PORT " + port);
});

