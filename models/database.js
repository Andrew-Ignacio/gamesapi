const Sequelize = require("sequelize")

const connection = new Sequelize("gamelist", "root", "", {
  host: "localhost",
  dialect: "mysql"
})

module.exports = connection
