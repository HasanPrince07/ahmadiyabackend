const mongoose = require('mongoose')

const allimageSchema = mongoose.Schema({
    AImage: String,
})

module.exports = mongoose.model('allimage', allimageSchema)