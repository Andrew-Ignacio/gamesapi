const Game = require("../models/Game")

exports.index = (req, res) => {

  let HATEOAS = [
    {
      href: "http://localhost:3000/auth",
      rel: "login",
      method: "POST"
    }
  ]

  Game.findAll()
  .then(games => {
    res.statusCode = 200
    res.json({games: games, _links: HATEOAS})
  })
  .catch(err => res.sendStatus(500))
}

exports.game = (req, res) => {
  let id = req.params.id

  let HATEOAS = [
    {
      href: "http://localhost:3000/game/" + id,
      rel: "delte_game",
      method: "DELETE"
    },
    {
      href: "http://localhost:3000/game/" + id,
      rel: "edit_game",
      method: "PUT"
    },
    {
      href: "http://localhost:3000/games",
      rel: "get_all_games",
      method: "GET"
    }
  ]

  if(isNaN(id)) res.sendStatus(400)
  Game.findByPk(id)
  .then(game => {
    if(game == undefined) res.sendStatus(404)
    res.statusCode = 200
    res.json({game: game, _links: HATEOAS})
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
