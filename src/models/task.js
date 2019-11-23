const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
nombre: String,
facultad: String,
universidad: String,
plan: Number

});

module.exports = mongoose.model('tasks',TaskSchema);