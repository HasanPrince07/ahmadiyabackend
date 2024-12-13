const mongoose = require('mongoose')

const addeventSchema = mongoose.Schema({
    eImage: String,
    eName: String,
    eDate: String,
    eStatus: String,
    eDetail: String,
})

module.exports = mongoose.model('addevent', addeventSchema)