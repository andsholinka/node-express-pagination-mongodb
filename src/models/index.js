// const dbConfig = require("../config/db.config.js");
require('dotenv').config();

const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB_URI;
db.tutorials = require("./tutorial.model.js")(mongoose, mongoosePaginate);

module.exports = db;