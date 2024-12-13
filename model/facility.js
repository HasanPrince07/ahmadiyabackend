const mongoose = require('mongoose')

const facilitySchema = mongoose.Schema({
    HColor: String,
})

module.exports = mongoose.model('facility', facilitySchema)