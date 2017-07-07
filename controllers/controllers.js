var mysql = require('mysql');

module.exports = function(app) {

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

//root get route
    app.get("/", function (req, res) {


        //var orm = require("../model/model.js");
        // orm.selectWhere('*', 'battles', 'deaths', 'battles.defender_king' ,'deaths.name', 'predictions', 'battles.defender_king', 'predictions.name');

        connection.query("SELECT * FROM battles " +
            "INNER JOIN deaths " +
            "ON battles.defender_king = deaths.name " +
            "INNER JOIN predictions " +
            "ON battles.defender_king = predictions.name;",

            function (err, data) {
                if (err) {
                    throw err;
                }
                console.log("the table is ", data);

                res.render("index", {battles: data});
            });
    });

    app.post("/", function (req, res) {

        connection.query("INSERT INTO battles (note) VALUES (?)", [req.body.note], function(err, result) {
            if (err) throw err;
            console.log(result);

            res.redirect('/');
        });
    });

};



