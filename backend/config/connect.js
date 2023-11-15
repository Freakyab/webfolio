const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const client = mongoose.createConnection(process.env.MONGO_URI);

module.exports = client;
