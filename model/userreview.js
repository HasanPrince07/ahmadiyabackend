const mongoose = require('mongoose')

const userreviewSchema = mongoose.Schema({
    name: String,
    review: String,
    status: { type: String, default: "hide" }
})

module.exports = mongoose.model('userreview', userreviewSchema)