const mongoose = require('mongoose')

const teacherSchema = mongoose.Schema({
    TName: String,
    TSubject: String,
    TDetail: String,
})

module.exports = mongoose.model('teacher', teacherSchema)