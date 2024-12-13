const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    BColor: String,
    headingColor: String,
    headingBColor: String,
    buttonColor: String,
    buttonBColor: String,
    buttonHColor: String,
    buttonHBColor: String,
    aButtonColor: String,
    aButtonBColor: String,
    aButtonHColor: String,
    aButtonHBColor: String
})

module.exports = mongoose.model('review', reviewSchema)