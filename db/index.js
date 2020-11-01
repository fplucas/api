const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('postgres', 'postgres', 'password', {
  host: 'pgdata',
  dialect: 'postgres',
})

module.exports = sequelize
