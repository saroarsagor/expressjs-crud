const express = require('express'); 
const router = require('./src/routes/api'); 
const app = new express(); 

const bodyParser= require('body-parser');
const rateLimit= require('express-rate-limit');
const helmet=require('helmet');
const mongoSanitize=require('express-mongo-sanitize');
const hpp=require('hpp');
const cors=require('cors');


app. use (cors());
app. use (helmet());
app. use (mongoSanitize());
app.use (hpp());
app.use (bodyParser.json());

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
})

// Apply the rate limiting middleware to all requests.
app.use(limiter)

const mongoose = require('mongoose');

let URI = "mongodb://localhost:27017/School";
let OPTION = { user: '', pass: '',autoIndex: true };

mongoose.connect(URI, OPTION)
    .then(() => {
        console.log("Connected to MongoDB successfully!");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });




app.use("/api/v2", router);

app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",data:"not found"})
});


module.exports = app;
