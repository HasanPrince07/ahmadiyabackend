const express = require("express")
const app = express()
app.use(express.json())
require("dotenv").config()
const userRouter = require("./router/user")
const adminRouter = require("./router/admin")
const mongoose = require("mongoose")
mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)


app.use(express.static("public"))
app.use('/user', userRouter)
app.use('/admin', adminRouter)
app.listen(5000, () => { console.log(`server is running on port ${process.env.PORT}`) })