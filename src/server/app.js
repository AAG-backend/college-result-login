//Load environment variables from .env
require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
//
const { sequelize } = require('./db');

// const {Result} = require('./models/index')
// const {Register} = require('./models/index')



sequelize.sync();
// sequelize.sync({ force: false});
// sequelize
//   .sync()
//   .then((result) => {
//     console.log(result)
//   })

//allow CORS request
app.use(cors());
//loading middleware
app.use(morgan('dev'))
// Parsing middleware for form input data and json or able to access req.cookies
app.use(express.json());
app.use(cookieParser()); 
app.use(express.urlencoded({extended: true})); // This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.

///////// routes /////
app.use('/api', require('./routes'));

//ERROR handling middleware

app.use((error, req, res, next) => {
  console.error('Server Error: ', error);
  if(res.statusCode < 400) res.status(500);
  res.send({error: error.message, name: error.name, message: error.message, table: error.table})
})

//Enable create the admin students profile and Course results 


module.exports = app;