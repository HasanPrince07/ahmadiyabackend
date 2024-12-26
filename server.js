const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const allowedOrigins = [
  'https://www.ahmadiyamadarsa.com',
  'https://ahmadiyamadarsa.com',
  'https://www.ahmadiyamadarsa.com',
  'https://ahmadiyamadarsa.com',
  'ahmadiyabackend.onrender.com/'
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);
require("dotenv").config();
const userRouter = require("./router/user");
const adminRouter = require("./router/admin");
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL).then(() => { console.log("Connected to MongoDB") }).catch((error) => { console.log("Error connecting to MongoDB:", error) });


app.use(express.static("public"));
app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.listen(process.env.PORT, () => { console.log(`Server is running on port ${process.env.PORT}`) });
