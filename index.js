// Configurações do Express
const express = require("express")
const app = express()
const port = 3000 || process.env.PORT

//Bibliotecas
const bodyParser = require("body-parser")
const cors = require("cors")

// Controllers
const gamesController = require("./controllers/gamesController")
const usersController = require("./controllers/usersController")

// Middlewares
const userAuth = require("./middlewares/userAuth")

// Configurações
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

// Rotas de jogos
app.get("/games", userAuth, gamesController.index)
app.get("/game/:id", userAuth, gamesController.game)
app.post("/game", userAuth, gamesController.create)
app.delete("/game/:id", userAuth, gamesController.delete)
app.put("/game/:id", userAuth, gamesController.update)

// Rotas de login da API
app.post("/auth", usersController.auth)

// Servidor
app.listen(port, () => console.log("Servidor rodando"))
