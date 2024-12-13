const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    SImage: String,
    SName: String,
    SPercentage: String,
    SClass: String,
})

module.exports = mongoose.model('student', studentSchema)