const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    UFName: String,
    ULName: String,
    UEmail: String,
    UPhone: String,
    UQuery: String,
    UStatus: { type: String, default: "unread" },
})

module.exports = mongoose.model('contact', contactSchema)