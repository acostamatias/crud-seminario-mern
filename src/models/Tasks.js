const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tasksSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    task: {
        type: String,
        required: true
    },
    taskCreated: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Tasks', tasksSchema);