const mongoose = require("mongoose");
const client = require("../config/connect.js");

const userMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserMessage = client.model("UserMessage", userMessageSchema);

module.exports = UserMessage;