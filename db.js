const mongoose = require('mongoose');
require('dotenv').config();

//define the mongodb connection url
//const mongoURL = 'mongodb://localhost:27017/hotels';// replace mydatabase with your database name

//const mongoURL = 'mongodb://userid:<password>@ac-u24qxc8-shard-00-00.jxlozh4.mongodb.net:27017,ac-u24qxc8-shard-00-01.jxlozh4.mongodb.net:27017,ac-u24qxc8-shard-00-02.jxlozh4.mongodb.net:27017/?ssl=true&replicaSet=atlas-p3jekw-shard-0&authSource=admin&appName=Cluster0';
//setup mongoDB connection
const mongoURL = process.env.MONGODB_URL_LOCAL;
//const mongoURL = process.env.MONGODB_URL;
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
