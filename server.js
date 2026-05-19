const express = require('express')
const app = express()
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Welcome to our hotel....How can I help you?')
})





const personRoutes = require('./routes/personRoutes');
app.use('/',personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/',menuRoutes);

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})


