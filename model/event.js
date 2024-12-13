const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    BColor: String,
    eventBColor: String,
    sHeadingColor: String,
    buttonColor: String,
    buttonBColor: String,
    buttonHColor: String,
    buttonHBColor: String,
    eBColor: String,
    eButtonHBColor: String
})

module.exports = mongoose.model('event', eventSchema)