const mongoose = require('mongoose')

const footerSchema = mongoose.Schema({
    BColor: String,
    HColor: String,
    TColor: String,
    CImage: String,
    FImage: String,
    Heading: String,
    Address: String,
    Email: String,
    Phone: String,
    MAddress: String
})

module.exports = mongoose.model('footer', footerSchema)