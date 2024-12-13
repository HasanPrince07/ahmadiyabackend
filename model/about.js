const mongoose = require('mongoose')

const aboutSchema = mongoose.Schema({
    Image: String,
    PName: String,
    PDetail: String,
    About: String,
    BColor: String,
    HColor: String,
    TColor: String
})

module.exports = mongoose.model('about', aboutSchema)