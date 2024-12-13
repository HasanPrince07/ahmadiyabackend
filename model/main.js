const mongoose = require('mongoose')

const mainSchema = mongoose.Schema({
    image: String,
    sectionBColor: String,
    heading: String,
    subHeading: String,
    headingColor: String,
    button: String,
    buttonColor: String,
    buttonBColor: String,
    buttonHColor: String,
    buttonHBColor: String
})

module.exports = mongoose.model('main', mainSchema)