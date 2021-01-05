const User = require("../models/User")
const jwt = require("jsonwebtoken")
const JWTSECRET = "senhajwt"

exports.auth = (req, res) => {
  var { email, password } = req.body
  if(email == undefined || password == undefined) res.sendStatus(400)

  User.findOne({where: {email : email}})
    .then(user => {
      if(user == undefined) res.sendStatus(404)
      if(user.password != password) res.sendStatus(406)
      jwt.sign({id: user.id, email: user.email}, JWTSECRET, {expiresIn: "24H"},
      (err, token) => {
        if(err) res.sendStatus(400)
        res.status(200)
        res.json({token: token})
      })
    })
}
