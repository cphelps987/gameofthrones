/*var connection = require("../controllers/controllers.js");

var orm = {
    selectWhere: function(whatToSelect, table_1, table_2, table_1_colSearch, table_2_colSearch, table_3, table_1_NewColSearch, table_3_colSearch, cb) {
        var queryString = "SELECT ?? FROM ?? " +
                          "INNER JOIN ?? " +
                          "ON ?? = ?? " +
                          "INNER JOIN ?? " +
                          "ON ?? = ??;";

        connection.query(queryString, [whatToSelect, table_1, table_2, table_1_colSearch, table_2_colSearch, table_3, table_1_NewColSearch, table_3_colSearch,], function(err, result) {
            cb(result);
        });
    },
};

module.exports = orm;*/

/*"SELECT * FROM battles " +
 "INNER JOIN deaths " +
 "ON battles.defender_king = deaths.name " +
 "INNER JOIN predictions " +
 "ON battles.defender_king = predictions.name;",*/