const mongoose = require('mongoose')

const headerSchema = mongoose.Schema({
    logo: String,
    heading: String,
    headingColor: String,
    headingBColor: String,
    linksColor: String,
    linksBColor: String,
    aLinkColor: String,
    aLinkBColor: String
})

module.exports = mongoose.model('header', headerSchema)