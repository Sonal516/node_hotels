const mongoose = require('mongoose');

//define the mongodb connection url
const mongoURL = 'mongodb://localhost:27017/hotels';// replace mydatabase with your database name

//setup mongoDB connection
mongoose.connect(mongoURL);

//get the default connection
//Mongoose mantains a default connection object representing the mongoDB connection.

const db = mongoose.connection;

//define event listeners for database connection

db.on('connected', ()=>{
    console.log('Connected to mongoDB server');
});

db.on('error', ()=>{
    console.log('mongoDB connection error');
});

db.on('disconnected', ()=>{
    console.log('MongoDB disconnected');
});

//export the database connection

module.exports = db;
