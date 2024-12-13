const mongoose = require('mongoose')

const linkSchema = mongoose.Schema({
    LName: String,
    LAddress: String,
})

module.exports = mongoose.model('link', linkSchema)