const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tabelBooks = new Schema({
  name: {
    type: String,
    required: true,
  },
  years: {
    type: String,
    required: true,
  },
  book_number: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("books", tabelBooks);
