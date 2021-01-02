const express = require("express");
const app = express();
const dotenv = require("dotenv").config({ path: "./config.env" });
const bodyParser = require("body-parser")
const multer = require("multer")
const connectDB = require("./config/db");


//Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(multer().any())//For formData send


app.use(express.static("./public"));



//Routes
app.use("/api/v1", require("./routes/geoRouter."));


connectDB();

app.listen(process.env.PORT, (err) => {
    if (err) console.log(err);

    console.log("Listening on port " + process.env.PORT)
})