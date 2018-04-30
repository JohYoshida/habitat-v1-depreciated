var RNDBModel = require('react-native-db-models')

var DB = {
    "quotes": new RNDBModel.create_db("quotes"),
    "journalEntry": new RNDBModel.create_db("journalEntry"),
    "habits": new RNDBModel.create_db("habits"),
}

module.exports = DB
