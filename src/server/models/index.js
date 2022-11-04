const { Sequelize } = require('sequelize')
const { sequelize } = require('../db');

const Result = sequelize.define('results', {
  studentname: Sequelize.STRING,
  studentlastname: Sequelize.STRING,
  coursename: Sequelize.STRING,
  courseresult: Sequelize.INTEGER,
  coursegrade: Sequelize.STRING
})

const Register = sequelize.define('registers', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING
})


module.exports = {
    db: sequelize,
    Result,
    Register
  };