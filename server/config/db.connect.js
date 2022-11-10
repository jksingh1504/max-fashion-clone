const mongoose = require("mongoose");
require("dotenv").config();
const mongo_url=process.env.MONGO_URL

const connectDB = mongoose.connect(mongo_url);

module.exports = connectDB;
