const { Sequelize, Model} = require('sequelize')
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  Storage: path.join(__dirname, 'db.sqlite'),
  logging: false
});

module.exports = {
  sequelize
}

