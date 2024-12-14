console.log("call 1st line");
const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const userRouter = require("./router/user");
const adminRouter = require("./router/admin");
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL).then(() => { console.log("Connected to MongoDB") }).catch((error) => { console.log("Error connecting to MongoDB:", error) });


app.use(express.static("public"));
app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.listen(process.env.PORT, () => { console.log(`Server is running on port ${process.env.PORT}`) });
