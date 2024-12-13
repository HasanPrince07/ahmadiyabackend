const mongoose = require('mongoose')

const historySchema = mongoose.Schema({
    HText: String,
})

module.exports = mongoose.model('history', historySchema)