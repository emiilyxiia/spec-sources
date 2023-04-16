const path = require("path");
require('dotenv').config({path: path.resolve(__dirname, '../.env')});

//doesn't push password to the github
const dbUser = process.env.DBUSER;
const dbName = process.env.DBNAME;
const dbPassword = process.env.DBPASSWORD;
const discardAfterXDays = 14;
const URI = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.yavooxj.mongodb.net/${dbName}?retryWrites=true&w=majority`;

module.exports = {
    URI: URI,
    discardAfterXDays: discardAfterXDays
};