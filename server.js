const express = require('express')
const app = express()
const db = require('./db');
require('dotenv').config();
const passport = require('./auth');



const bodyParser = require('body-parser');
app.use(bodyParser.json());

//middleware function
const logRequest = (req,res,next)=>{
  console.log(`[${new Date().toLocaleString()}] request made to : ${req.originalUrl}`);
  next();
}



app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local',{session : false});

app.get('/', (req, res) => {
  res.send('Welcome to our hotel....How can I help you?')
})





const personRoutes = require('./routes/personRoutes');
app.use('/',localAuthMiddleware,personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/',menuRoutes);



const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})


