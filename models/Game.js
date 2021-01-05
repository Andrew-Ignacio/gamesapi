const Sequelize = require("sequelize")
const connection = require("./database.js")

const Game = connection.define("game", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

Game.sync({force: false})
module.exports = Game
