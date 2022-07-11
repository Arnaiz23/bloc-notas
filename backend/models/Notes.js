const mongoose = require("mongoose");

const notes = new mongoose.model(
  "Note",
  new mongoose.Schema({
    title: String,
    content: String,
    user: String,
    date: {
      type: Date,
      default: new Date(),
    },
  })
);

module.exports = notes;
