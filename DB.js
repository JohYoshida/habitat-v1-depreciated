var RNDBModel = require('react-native-db-models')

var DB = {
    "quotes": new RNDBModel.create_db("quotes"),
    "journalEntry": new RNDBModel.create_db("journalEntry"),
}

module.exports = DB
