const mongoose = require('mongoose')

const resultSchema = mongoose.Schema({
    BColor: String,
})

module.exports = mongoose.model('result', resultSchema)