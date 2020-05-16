const mongoose = require('mongoose');

const temperSchema = new mongoose.Schema({
    temp: {
        type: String
    },
    humidity: {
        type: String
    },
    st: {
        type: String
    }
}) 

module.exports = mongoose.model('temper', temperSchema);