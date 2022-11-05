const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = mongoose.connect(process.env.mongo_url);

module.exports = connectDB;
