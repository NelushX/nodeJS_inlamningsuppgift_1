const mongoose = require("mongoose");

const schemaTodo = new mongoose.Schema({
    text: { type: String, minlength: 2, required: true},
    date: { type: Date, default: Date.now }
});

const Todo = mongoose.model("Todo", schemaTodo);

module.exports = Todo;