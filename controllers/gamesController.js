const Game = require("../models/Game")

exports.index = (req, res) => {
  Game.findAll()
  .then(games => {
    res.statusCode = 200
    res.json(games)
  })
  .catch(err => res.sendStatus(500))
}

exports.game = (req, res) => {
  let id = req.params.id
  if(isNaN(id)) res.sendStatus(400)
  Game.findByPk(id)
  .then(game => {
    if(game == undefined) res.sendStatus(404)
    res.statusCode = 200
    res.json(game)
  })
}

exports.create = (req, res) => {
  let { title, price } = req.body
  Game.create({ title: title, price: price })
  .then(() => res.sendStatus(200))
  .catch(err => res.sendStatus(500))
}

exports.delete = (req, res) => {
  let id = req.params.id
  if(isNaN(id)) res.sendStatus(400)
  Game.destroy({ where: { id: id } })
  .then(() => res.sendStatus(200))
  .catch(err => res.sendStatus(500))
}

exports.update = (req, res) => {
  let { title, price } = req.body
  let id = parseInt(req.params.id)
  if(isNaN(id)) res.sendStatus(400)
  Game.findByPk(id)
  .then(game => {
    if(game == undefined) res.sendStatus(404)
    if(title == undefined) title = game.title
    if(price == undefined) price = game.price
    Game.update({title:title, price: price}, {where: {id: id}})
    res.sendStatus(200)
  })
  .catch(err => res.sendStatus(500))
}
