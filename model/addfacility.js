const mongoose = require('mongoose')

const addfacilitySchema = mongoose.Schema({
    FImage: String,
    FName: String,
    FDetail: String,
})

module.exports = mongoose.model('addfacility', addfacilitySchema)