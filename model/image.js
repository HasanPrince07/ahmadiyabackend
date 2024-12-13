const mongoose = require('mongoose')

const imageSchema = mongoose.Schema({
    imageOne: String,
    imageTwo: String,
    imageThree: String,
    imageFour: String,
})

module.exports = mongoose.model('image', imageSchema)